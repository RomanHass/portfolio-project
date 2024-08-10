import styled from "styled-components";
import { FlexWrapper } from "../../../../compontens/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { Button } from "../../../../compontens/Button";

type ProjectPropsType = {
  title: string
  text: string
  src: string
  link: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper align='center'>
        <StyledContentBox>
          <StyledContent>
            <TitleThird>{props.title}</TitleThird>
            <Text>{props.text}</Text>
            {/* <Link href={"#"}>{props.link}</Link> */}
            <Button as="a">{props.link}</Button>
          </StyledContent>
        </StyledContentBox>
        <StyledContentBox>
          <Image src={props.src} alt="" />
        </StyledContentBox>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  max-width: 992px;
  min-height: 524px;
  margin: 0 auto;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 6px 64px 0 rgba(112, 144, 176, 0.1);

  &:not(:last-child) {
    margin-bottom: 80px;

    @media ${theme.media.md} {
      margin-bottom: 50px;
    }
  } 
  
  &:nth-child(odd) ${FlexWrapper} {
    flex-direction: row-reverse;
  }

  ${Button} {
    padding: 8px 24px;
    font-size: 18px;
    max-width: 150px;
    border: 1px solid ${theme.colors.accent};
    border-radius: 24px;
  }

  @media ${theme.media.lg} {
    max-width: 600px;

    ${FlexWrapper} {
      flex-direction: column-reverse;
    }

    &:nth-child(odd) ${FlexWrapper} {
      flex-direction: column-reverse;
    }
  }
`

const StyledContentBox = styled.div `
  width: 100%;
`

const StyledContent = styled.div`
  max-width: 405px;
  min-height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media ${theme.media.md} {
    max-width: 400px;
  }

  @media ${theme.media.sm} {
    max-width: 275px;
  }
`

const TitleThird = styled.h3`
  margin-bottom: 24px;
`

const Text = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
`

// const Link = styled.a`
//   padding: 8px 24px;
//   display: inline-block;
//   font-family: "Roboto", sans-serif;
//   font-weight: 500;
//   font-size: 18px;
//   max-width: 150px;
//   border: 1px solid ${theme.colors.accent};
//   border-radius: 24px;

//   &:hover {
//     border: 1px solid transparent;
//     background-color: ${theme.colors.rarely};
//   }
// `

const Image = styled.img`
  display: block;
  width: 100%;
  height: 524px;
  object-fit: cover;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  @media ${theme.media.lg} {
    border-top-left-radius: 24px;
    border-bottom-right-radius: 0;
  }

  ${StyledProject}:nth-child(odd) & {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;

    @media ${theme.media.lg} {
      border-top-left-radius: 24px;
      border-bottom-left-radius: 0;
      border-top-right-radius: 24px;
    }
  }
`