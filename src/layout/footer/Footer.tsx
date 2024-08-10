import styled from "styled-components";
import { Icon } from "../../compontens/icon/Icon";

import footerBg from "../../assets/images/footer_bg.svg";
import { FlexWrapper } from "../../compontens/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterBackground>
        <SocialBlock>
          <SocialIconsList>
            <FlexWrapper justify="center" align="center" gap="35px">
              <SocialIconsItem>
                <SocialIconLink>
                  <Icon iconId={"instagram"} width={"38px"} height={"39px"} viewBox={"0 0 48px 48px"}/>
                </SocialIconLink>
              </SocialIconsItem>
              <SocialIconsItem>
                <SocialIconLink>
                  <Icon iconId={"linkedin"} width={"38px"} height={"39px"} viewBox={"0 0 48px 48px"}/>
                </SocialIconLink>
              </SocialIconsItem>
              <SocialIconsItem>
                <SocialIconLink>
                  <Icon iconId={"telegram"} width={"42px"} height={"33px"} viewBox={"0 0 48px 48px"}/>
                </SocialIconLink>
              </SocialIconsItem>
            </FlexWrapper>
          </SocialIconsList>
          <Copyright>
            © 2024 Roman Khassazhirov, All Rights Reserved.
          </Copyright>
        </SocialBlock>
      </FooterBackground>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
`

const SocialBlock = styled.div`
  max-width: 400px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  text-align: center;

  @media ${theme.media.sm} {
    max-width: 220px;
    top: -60%;
  }
`

const SocialIconsList = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
`

const SocialIconsItem = styled.li`
  line-height: 0;
`

const SocialIconLink = styled.a`
  display: inline-block;
  line-height: 0;
  color: ${theme.colors.accent};

  @media (hover: hover) {
    &:hover {
      color: ${theme.colors.rarely};
    }

  }
  &:active {
    color: ${theme.colors.rarely};
  }
`

const Copyright = styled.small`
  font-size: 16px;
`

const FooterBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 344px;
  background-image: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${theme.media.sm} {
    min-height: 140px;
  }
`