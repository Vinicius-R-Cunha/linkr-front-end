import Header from "../Header";
import { TimelineContainer, PostsContainer, Publish, Post, ImageLikes, PostContent, Snippet } from "./style";
import { FiHeart } from "react-icons/fi";
import temp from "../../assets/perfil-temp.png";
import temp2 from "../../assets/snippet-temp.png";

export default function Timeline() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <Header />
            <TimelineContainer>
                <PostsContainer>
                    <h1 className="timeline-title">timeline</h1>
                    <Publish>
                        <ImageLikes className="image-likes-publish">
                            <img className="profile-image" src={temp} alt="" />
                        </ImageLikes>
                        <form className="inputs">
                            <p className="inputs-title">What are you going to share today?</p>
                            <input className="input-link" type="url" placeholder="http://..." />
                            <textarea
                                id="story"
                                name="story"
                                rows="5"
                                cols="10"
                                className="input-article"
                                placeholder="Awesome article about #javascript"
                            ></textarea>
                            <button onClick={e => handleSubmit(e)}>Publish</button>
                        </form>
                    </Publish>

                    <Post>
                        <ImageLikes>
                            <img className="profile-image" src={temp} alt="" />
                            <FiHeart className="like-icon" />
                            <p className="likes-quantity">13 likes</p>
                        </ImageLikes>
                        <PostContent>
                            <p className="profile-name">Juvenal Juvêncio</p>
                            <p className="article-text">Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</p>
                            <Snippet>
                                <div className="snippet-data">
                                    <p className="title">Como aplicar o Material UI em um projeto React</p>
                                    <p className="description">Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</p>
                                    <p className="link">https://medium.com/@pshrmn/a-simple-react-router</p>
                                </div>
                                <img src={temp2} alt="" />
                            </Snippet>
                        </PostContent>
                    </Post>

                </PostsContainer>
            </TimelineContainer>
        </>
    )
}