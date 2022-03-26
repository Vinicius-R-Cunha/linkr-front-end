import Header from "../../components/Header";
import Timeline from "../../components/Timeline";
import HashtagBox from "../../components/HashtagBox";
import { Container } from "../HashtagTimeline/style";
import { useParams } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
export default function UserTimeline() {
  const { token } = useContext(UserContext);

  const [user, setUser] = useState();
  const { id } = useParams();
  useEffect(() => {
    const promise = axios.get(process.env.REACT_APP_BACK_URL + "user/" + id, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    promise.then((response) => {
      setUser(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }, [id]);

  return (
    <Container>
      <Header />
      {user && (
        <Timeline
          showPublish={false}
          route={`users/${id}`}
          mainTitle={`${user.name} posts`}
        />
      )}
      <HashtagBox />
    </Container>
  );
}
