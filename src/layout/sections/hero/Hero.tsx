import styled from 'styled-components';
import backgroundImage from '../../../assets/images/hero.png';
import { FlexWrapper } from '../../../compontens/FlexWrapper';
import { theme } from '../../../styles/Theme';
import { Button } from '../../../compontens/Button';

export const Hero = () => {
  return (
    <>
      <FlexWrapper>
        <HeroContent>
          <MainTitle>Software Developer</MainTitle>
          <SecondTitle>
            Hello,  my name is Roman Khassazhirov
          </SecondTitle>
          <AboutMe>
            Short text with details about you, what you do or your professional career. You can add more information on the about page.
          </AboutMe>
          <Button as="a">Projects</Button>
          <Button as="a">LinkedIn</Button>
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
    margin-bottom: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    color: ${theme.colors.rarely};
`

const SecondTitle = styled.h2`
  margin-bottom: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #333;
  `

const AboutMe = styled.p`
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 1.5;
`

const Background = styled.div`
  position: relative;
  top: -5px;
  right: -75px;
  width: 720px;
  height: 629px;
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`