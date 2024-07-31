import styled from 'styled-components';
import backgroundImage from '../../../assets/images/hero.png';
import { FlexWrapper } from '../../../compontens/FlexWrapper';

export const Hero = () => {
  return (
    <>
      <FlexWrapper>
        <HeroContent>
          <MainTitle>Software Developer</MainTitle>
          <SecondTitle>
            Hello,  my name is Roman Khassazhirov
          </SecondTitle>
          <p>
            Short text with details about you, what you do or your professional career. You can add more information on the about page.
          </p>
          <a href="">Projects</a>
          <a href="">LinkedIn</a>
        </HeroContent>
        <Background/>
      </FlexWrapper>
    </>
  );
};

const HeroContent = styled.div`
  max-width: 508px;
  margin-top: 100px;
`

const MainTitle = styled.h1`
`

const SecondTitle = styled.h2``

const Background = styled.div`
  position: relative;
  top: 0px;
  right: -120px;
  width: 720px;
  height: 629px;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`