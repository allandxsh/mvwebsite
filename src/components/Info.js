import React, { Component } from "react";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import { fadeInRight } from "react-animations";
import Wave from "../assets/wave.svg";
import { AiFillStar } from "react-icons/ai";

const fadeIn = keyframes`${fadeInRight}`;

const slides = [
  {
    title: "",
    description:
      "Encurte a distância para se tornar um Hospital Digital com plataforma líder em gestão de saúde e 100% integrada",
    button: "Explore o SOUL MV",
    alt: "Info",
  },
  {
    title: "",
    description:
      " Melhore o desempenho do seu Centro de Diagnóstico. Uma plataforma RIS/PACS que aumenta a produtividade médica, torna o fluxo de atividades mais fluido. ",
    button: "Conheça o VIVACE MV",
    alt: "Info",
  },
  {
    title: "",
    description:
      "A revolução na gestão do cuidar. A plataforma conecta todos os atores da saúde, colaborando com avanços no cuidado individual, por profissionais e instituições, com o foco na medicina preventiva.",
    button: "O novo Global Health",
    alt: "Info",
  },
  {
    title: "",
    description:
      "Eleve o seu negócio para o próximo nível. Atinja a excelência na gestão e torne o ambiente da sua instituição favorável para alcançar grandes resultados.",
    button: "Estratégia e Qualidade",
    alt: "Info",
  },
  {
    title: "",
    description:
      "lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas",
    button: "Lorem Ipsum",
    alt: "Info",
  },

  {
    title: "",
    description:
      "A plataforma MV para operadoras de planos de saúde organiza e controla os processos administrativos, financeiros e gerenciais. ",
    button: "Conheça a Solução",
    alt: "Info",
  },
];

const InfoContainer = styled.div`
  height: 422px;
  background: url(${Wave});
  background-size: cover;
  overflow: hidden;
  margin: 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoWrap = styled.div`
  margin-left: 150px;
  margin-top: 40px;
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: 3s ${fadeIn};

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: block;
    font-size: 13px;
    margin: 0;
  }
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
  height: 170px;
  width: 340px;
  color: #000;
  flex-direction: column;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  justify-content: center;

  p {
    margin-top: 30px;
  }

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: block;
    font-size: 13px;
    margin: 0;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 640px) {
    width: 100%;
    display: block;
    margin-top: 40px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  @media only screen and (max-width: 640px) {
    width: 100%;
    margin-left: 150px;
  }
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

  :hover {
    background: #000;
    color: #fff;
    transition: 0.5s;
  }
`;

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,

      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };
    return (
      <InfoContainer>
        <Slider {...settings}>
          {slides.map((slide) => {
            return (
              <InfoWrap>
                <InfoContent>
                  <IconWrap>
                    <AiFillStar size={40} color={"#223865"} />
                  </IconWrap>

                  <p>{slide.description}</p>
                  <ButtonContainer>
                    <Button to={slide.path} primary="true">
                      {slide.button}
                    </Button>
                  </ButtonContainer>
                </InfoContent>
              </InfoWrap>
            );
          })}
        </Slider>
      </InfoContainer>
    );
  }
}
