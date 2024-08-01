import styled from 'styled-components';
import backgroundImage from '../../../assets/images/hero.png';
import { FlexWrapper } from '../../../compontens/FlexWrapper';
import { theme } from '../../../styles/Theme';

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
          <SocialLink>Projects</SocialLink>
          <SocialLink>LinkedIn</SocialLink>
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

const SocialLink = styled.a`
  display: inline-block;
  max-width: 115px;
  padding: 8px 24px;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  border: 2px solid ${theme.colors.accent};
  border-radius: 8px;
  color: ${theme.colors.accent};
  background-color: transparent;

  &:hover {
    background-color: ${theme.colors.rarely};
    border: 2px solid transparent;
  }

  &:not(:last-child) {
    margin-right: 12px;;
  }
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