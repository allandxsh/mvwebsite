import React from "react";
import styled from "styled-components";
import Chat from "../assets/chat.svg";

const ChatSectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 700px;
  align-items: center;
  overflow: hidden;
  margin: 0;
  flex-wrap: wrap;

  @media only screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 13px;
  }
`;

const ChatImageWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  height: 700px;
  width: 25%;

  img {
    height: 500px;
  }

  @media only screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 13px;

    img {
      height: 250px;
      margin-top: 30px;
    }
  }
`;

const ChatTextWrap = styled.div`
  width: 20%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const ChatText = styled.p`
  font-size: 20px;
  margin-right: 20px;
  font-family: "Quicksand", sans-serif;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

const Button = styled.div`
  width: 200px;
  color: #000;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
  background: #b9ebd8;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;

  :hover {
    background: #000;
    color: #fff;
    transition: 0.5s;
  }
`;

function ChatSection() {
  return (
    <ChatSectionContainer>
      <ChatImageWrap>
        <img src={Chat} alt="ChatImage"></img>
      </ChatImageWrap>
      <ChatTextWrap>
        <ChatText>
          Converse com um especialista em TI e Saúde. Estamos sempre a
          disposição para conversar com você.
        </ChatText>
        <ButtonContainer>
          <Button>Agende já</Button>
        </ButtonContainer>
      </ChatTextWrap>
    </ChatSectionContainer>
  );
}

export default ChatSection;
