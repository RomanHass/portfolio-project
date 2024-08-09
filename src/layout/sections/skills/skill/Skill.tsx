import styled from "styled-components";
import { Icon } from "../../../../compontens/icon/Icon";


type SkillPropsType = {
  iconId: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  flex: 0 1 auto;
`