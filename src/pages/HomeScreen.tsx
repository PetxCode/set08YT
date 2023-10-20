import styled from "styled-components";
import pix from "../assets/pp.jpg";
import video from "../assets/vid.mp4";
import moment from "moment";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useState, useEffect } from "react";

const HomeScreen = () => {
  const data = Array.from({ length: 10 });
  const [state, setState] = useState<any>({});

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("youtubeVideos")!));
  }, []);

  console.log("start: ", state.items);

  return (
    <Container>
      <br />

      <br />
      <Main>
        {state?.items.map((props: any) => (
          <Card
          //   key={props.id.videoId}
          >
            <Top>
              <Image
                src={
                  props.snippet.thumbnails.high.url
                    ? props.snippet.thumbnails.high.url
                    : pix
                }
              />
              <Video src={video} playsInline loop muted autoPlay />
              <Time>{moment(new Date().getTime()).format("LT")}</Time>
            </Top>
            <Bottom>
              <Avatar src={props.snippet.thumbnails.high.url} />
              <Content>
                <ContentText>{props.snippet.channelTitle}</ContentText>
                <SmallText>
                  <Text>Lorem ipsum dolor sit amet.</Text>
                  <Text>
                    3K Views &middot; {moment(new Date().getTime()).fromNow()}
                  </Text>
                </SmallText>
              </Content>
              <Dots />
            </Bottom>
          </Card>
        ))}
      </Main>
    </Container>
  );
};

export default HomeScreen;

const Dots = styled(BiDotsVerticalRounded)``;

const Text = styled.div``;

const SmallText = styled.div`
  font-size: 14px;
  color: #888787;
`;

const ContentText = styled.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 10px;
  line-height: 1.2;
`;

const Content = styled.div`
  flex: 1;
  margin: 0 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid silver;
  margin-left: 5px;
  object-fit: cover;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
`;

const Time = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  position: absolute;

  padding: 2px 10px;
  font-size: 12px;

  right: 10px;
  bottom: 10px;
  transition: all 350ms;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;
  transition: all 350ms;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  width: 100%;
  height: 200px;
  background-color: aliceblue;
  position: relative;

  transition: all 350ms;

  &:hover {
    ${Video} {
      opacity: 1;
    }
    ${Time} {
      opacity: 0;
    }
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: 300px;
  min-height: 200px;
  border: 1px solid silver;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 52px);
  margin-top: 100px;
`;
