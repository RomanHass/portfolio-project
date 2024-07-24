import styled from "styled-components";
import { Icon } from "../../compontens/icon/Icon";

import footerBg from "../../assets/images/footer_bg.svg";
import { FlexWrapper } from "../../compontens/FlexWrapper";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterBackground>
        <SocialIconsList>
          <FlexWrapper justify={"center"}>
            <SocialIconsItem>
              <SocialIconLink>
                <Icon iconId={"instagram"} width={"48px"} height={"48px"} viewBox={"0 0 48px 48px"}/>
              </SocialIconLink>
            </SocialIconsItem>
            <SocialIconsItem>
              <SocialIconLink>
                <Icon iconId={"linkedin"} width={"48px"} height={"48px"} viewBox={"0 0 48px 48px"}/>
              </SocialIconLink>
            </SocialIconsItem>
            <SocialIconsItem>
              <SocialIconLink>
                <Icon iconId={"telegram"} width={"48px"} height={"48px"} viewBox={"0 0 48px 48px"}/>
              </SocialIconLink>
            </SocialIconsItem>
          </FlexWrapper>
        </SocialIconsList>
        <Copyright>
          © 2024 Roman Khassazhirov, All Rights Reserved.
        </Copyright>
      </FooterBackground>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer``

const SocialIconsList = styled.ul`
  list-style-type: none;
`

const SocialIconsItem = styled.li``

const SocialIconLink = styled.a``

const Copyright = styled.small`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

const FooterBackground = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  height: 344px;
  background-image: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;
`