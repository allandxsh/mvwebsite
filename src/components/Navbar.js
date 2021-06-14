import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInLeft } from "react-animations";
import Img from "../assets/logo-white.svg";
import { Link } from "react-router-dom";

const fadeInAnimation = keyframes`${fadeIn}`;

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

const NavWrap = styled.div`
  height: 940px;
  width: 100%;
`;

const Nav = styled.div`
  height: 940px;
  width: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;

  color: #fff;
`;

const NavRow = styled.div`
  background-color: rgba(42, 207, 208, 0.2);
  height: 100%;
`;

const MenuWrap = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  opacity: 1;
`;

const Menu = styled.div`
  height: 85px;
  width: 1600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 150px;

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: block;
    margin: 0;
  }
`;
const LogoWrap = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: none;

    margin: 0;
  }
`;

const Logo = styled.div`
  height: 60px;
  width: 100px;
  background: url(${Img}) no-repeat;
  opacity: 1;
  animation: 1s ${fadeInAnimation};

  :hover {
    cursor: pointer;
  }
`;

const MenuItens = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const NavLink = styled(Link)`
  margin-top: 20px;
  color: #000000;
  font-family: "Quicksand";
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 0 15px;
  opacity: 100%;
  animation: 1s ${fadeInLeftAnimation};

  :after {
    content: "";
    margin: 0;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px solid;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  :hover:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  animation: 1s ${fadeInLeftAnimation};
`;

const ButtonContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
`;

const Button = styled.div`
  width: 200px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
  background: #223865;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
  opacity: 0.9;

  :hover {
    background: #000;
    color: #fff;
    transition: 0.8s;
    opacity: 1;
  }
`;

const Button2 = styled.div`
  width: 200px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
  background: transparent;
  border: 2px solid #fff;
  text-align: center;
  line-height: 32px;
  border-radius: 21px;

  :hover {
    background: #fff;
    color: #000;
    transition: 0.7s;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s ${fadeInAnimation};

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    font-size: 10px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 46px;
`;

const Title = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
`;

function Navbar() {
  return (
    <NavWrap>
      <Nav>
        <NavRow>
          <MenuWrap>
            <Menu>
              <LogoWrap>
                <Logo to="/" />
              </LogoWrap>
              <MenuItens>
                <NavLink to="/">Soluções</NavLink>
                <NavLink to="/">Segmentos</NavLink>
                <NavLink to="/">Conteúdo</NavLink>
                <NavLink to="/">Contato</NavLink>
                <ButtonContainer>
                  <Button>Área do Cliente</Button>
                </ButtonContainer>
              </MenuItens>
            </Menu>
          </MenuWrap>
          <TitleContainer>
            <TitleWrap>
              <Title>Saúde Digital ao alcance de todos</Title>
              <ButtonContainer2>
                <Button2>Contate um especialista</Button2>
              </ButtonContainer2>
            </TitleWrap>
          </TitleContainer>
        </NavRow>
      </Nav>
    </NavWrap>
  );
}

export default Navbar;
