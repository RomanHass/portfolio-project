import styled from "styled-components";
import { FlexWrapper } from "../../../../compontens/FlexWrapper";

type ProjectPropsType = {
  title: string
  text: string
  src: string
  link: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper align={"center"}>
        <div>
          <TitleThird>{props.title}</TitleThird>
          <Text>{props.text}</Text>
          <Link href={"#"}>{props.link}</Link>
        </div>
        <div>
          <Image src={props.src} alt="" />
        </div>
      </FlexWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div``

const TitleThird = styled.h3``

const Text = styled.p``

const Link = styled.a``

const Image = styled.img`
  width: 496px;
  height: 526px;
  object-fit: cover;
`