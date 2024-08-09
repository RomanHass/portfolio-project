import styled from 'styled-components';
import backgroundImage from '../../../assets/images/main_photo.png';
import { theme } from '../../../styles/Theme';
import { Button } from '../../../compontens/Button';
import { font } from '../../../styles/Common';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <MainTitle>Software Developer</MainTitle>
        <SecondTitle>
          Hello,  my name is <span>Roman Khassazhirov</span>
        </SecondTitle>
        <AboutMe>
          Short text with details about you, what you do or your professional career. You can add more information on the about page.
        </AboutMe>
        <Button as="a">Projects</Button>
        <Button as="a">LinkedIn</Button>
      </HeroContent>
      <Photo src={backgroundImage} alt="Person"/>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: 100vh;
  overflow: hidden;
  padding: 0 10px 77px;
  display: flex;
  justify-content: center;

  @media ${theme.media.xl} {
    flex-wrap: wrap-reverse;
  }

  @media ${theme.media.md} {
    padding-bottom: 40px;
  }
`

const HeroContent = styled.div`
  max-width: 508px;
  margin-top: 150px;

  @media ${theme.media.xl} {
    margin-top: -18%;
    max-width: 100%;
  }

  @media ${theme.media.sm} {
    margin-top: -25%;
  }
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
  ${font({family:"'Roboto', sans-serif", weight: 700, color: '#333', lineHeight: 1.2, Fmax: 44, Fmin: 30})};
  margin-bottom: 32px;

  span {
    white-space: nowrap;
  }
`

const AboutMe = styled.p`
  margin-bottom: 32px;
  font-size: 24px;
  line-height: 1.5;
`

const Photo = styled.img`
  position: relative;
  top: -220px;
  right: -6%;
  display: block;
  max-width: 777px;
  height: auto;
  object-fit: contain;

  @media ${theme.media.xl} {
    right: -25%;
  }

  @media ${theme.media.lg} {
    right: -17%;
  }

  @media ${theme.media.md} {
    right: -15%;
    max-width: 650px;
    top: -190px;
  }

  @media ${theme.media.sm} {
    right: -17%;
    max-width: 450px;
    top: -140px;
  }
`