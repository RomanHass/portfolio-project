import styled from "styled-components";

import photo from '../../../assets/images/main_photo.png';
import backgroundImage from '../../../assets/images/yellow-bg.svg';
import { FlexWrapper } from "../../../compontens/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
        <FlexWrapper align={"center"} justify="space-between">
          <div>
            <MainTitle>Software Developer</MainTitle>
            <SecondTitle>
              Hello,  my name is Roman Khassazhirov
            </SecondTitle>
            <p>
              Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </p>
            <a href="">Projects</a>
            <a href="">LinkedIn</a>
          </div>
          <Background>
            <Photo src={photo} alt="" />
          </Background>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: burlywood;
`

const  MainTitle = styled.h1`
`

const SecondTitle = styled.h2``

const Background = styled.div`
  position: relative;
  width: 777px;
  height: 877px;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`

const Photo = styled.img`
  position: absolute;
  right: 0;
  top: -50px;
  max-width: 50%;
  /* width: 720px; */
  /* height: 629px; */
  object-fit: contain;
`