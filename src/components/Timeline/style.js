import styled from "styled-components";

const PostsContainer = styled.div`
  width: 611px;

  display: flex;
  flex-direction: column;
  align-items: center;

    margin-right: 25px;
    overflow: auto;

    .input-icon-mobile {
        width: 100%;
        position: relative;


    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

        display: none;
        justify-content: center;
        align-items: center;

        margin-bottom: 22px;

        .search-icon-mobile {
            font-size: 23px;
            color: #c6c6c6;

            position: absolute;
            right: 20px;
            z-index: 3;
        }
    }

    .usernameAndFollowButton{
      height: 70px;
      width: 612px;

      display: flex;
      justify-content: space-between;
    }

    .timeline-title {
      width: 100%;
      font-family: "Oswald";
      font-weight: 700;
      font-size: 2.6875em;
      color: #ffffff;
      padding-top:0px; 
      padding-bottom: 42px;
    }

    .followButton{      
      width: 112px;
      height: 31px;

      border-radius: 5px;
      cursor: pointer;
      border-width: 0;
      
      font-family: "Lato";
      font-weight: 700;
      font-size: 14px;

      margin-top: 15px;

      :hover{
        filter: brightness(0.9)
      }
    }

  .loading-message {
    font-size: 30px;
    color: #ffffff;
  }

  .get-error-message {
    font-size: 36px;
    line-height: 45px;
    text-align: center;

    color: #ffffff;
  }

    @media (max-width: 960px) {
        margin-right: 0;

      .usernameAndFollowButton{
        width: 100%;
        margin-right: 10px;
      }

      .timeline-title {
        font-size: 33px;
        text-indent: 17px;
        padding-top: 20px;
        margin-bottom: 0px;
      }

      .followButton{
        margin-top: 25px;
      }

        .input-icon-mobile {
            display: flex;
        }
    }

  @media (max-width: 630px) {
    width: 100%;


    .usernameAndFollowButton{
      width: 100%;
      margin-right: 15px;
      
    }

   
    .timeline-title {
      font-size: 33px;
      text-indent: 17px;
      padding-top:20px;
      margin-bottom: 0px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    };

    .get-error-message {
      font-size: 20px;
      line-height: 25px;
    };
  };
`;
const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  margin-top: 16px;
  border-radius: 16px;
`;


const Post = styled.div`
  width: 100%;

  padding: 20px 0;
  display: flex;

  background: #171717;

  border-radius: 16px;

  @media (max-width: 630px) {
    padding: 10px 0 15px 0;

    border-radius: 0;
  }
`;


const Repost = styled.div`
  height: 33px;

  display: flex;
  align-items: center;
  margin-left: 10px;

  .reposted-icon {
    font-size: 18px;
    color: #ffffff;
  }
  
  p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #ffffff;

    margin-left: 5px;

    span {
      font-weight: 700;
    }
  }

`
const FollowButton = styled.button`	

  background-color: ${props => props.followeduser === 'Follow' ? '#1877F2' : '#ffffff'};
  color: ${props => props.followeduser === 'Follow' ? '#ffffff' : '#1877F2'};

	:disabled{
		background-color: #6D6D6D;
    color: #ffffff;
	}
`;

export { PostsContainer, Post, ContainerComments, Repost, FollowButton };

