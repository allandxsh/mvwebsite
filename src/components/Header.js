import React from "react";
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import styled from "styled-components";

const HeaderWrap = styled.header`
  height: 45px;
  width: 100%;
  background: white;
  display: flex;
  align-items: center;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 150px;
  max-width: 1240px;
  font-size: 13px;
  color: grey;

  @media only screen and (max-width: 640px) {
    width: 100%;
    margin-left: 25px;
    font-size: 10px;
  }
`;

const PhoneNumber = styled.span`
  display: flex;
  align-items: center;
  padding-right: 15px;

  a {
    margin-left: 5px;
    font-family: "Quicksand", sans-serif;
  }
`;

const MailInfo = styled.span`
  display: flex;
  align-items: center;
  padding-right: 15px;
  a {
    margin-left: 5px;
    font-family: "Quicksand", sans-serif;
  }
`;

const SocialIcons = styled.div`
  a {
    padding-right: 5px;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <InfoContainer>
        <PhoneNumber>
          <RiPhoneFill />
          <a
            href="tel:81999999999"
            style={{ textDecoration: "none", color: "grey" }}
          >
            81 99999 9999
          </a>
        </PhoneNumber>

        <MailInfo>
          <RiMailFill />
          <a
            href="mailto:mv@medicalsolutions.com"
            style={{ textDecoration: "none", color: "grey" }}
          >
            mv@medicalsolutions.com{" "}
          </a>
        </MailInfo>
        <SocialIcons>
          <a
            href="https://www.facebook.com/MVsaOficial"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            style={{ textDecoration: "none", color: "#1194F4" }}
          >
            <TiSocialFacebook size={15} />
          </a>
          <a
            href="https://twitter.com/MVsaOficial"
            target="_blank"
            rel="noreferrer"
            title="Twitter"
            style={{ textDecoration: "none", color: "#1A91DA" }}
          >
            <TiSocialTwitter size={15} />
          </a>
          <a
            href="https://www.linkedin.com/company/mv-sa-oficial/?originalSubdomain=br"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            style={{ textDecoration: "none", color: "#0866C2" }}
          >
            <TiSocialLinkedin size={15} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCv--sZJmgbM4zJMixlrvvKg"
            target="_blank"
            rel="noreferrer"
            title="Youtube"
            style={{ textDecoration: "none", color: "red" }}
          >
            <TiSocialYoutube size={15} />
          </a>
        </SocialIcons>
      </InfoContainer>
    </HeaderWrap>
  );
}

export default Header;
