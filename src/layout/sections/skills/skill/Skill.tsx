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
  width: 120px;
  height: 120px;
`