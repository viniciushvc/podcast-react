import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { animations } from './animations'

export const Wrapper = styled.section`
  ${animations}

  background-image: linear-gradient(
    to right bottom,
    #6e366f,
    #6c3875,
    #6a3b7c,
    #673d82,
    #634089,
    #5e4088,
    #593f87,
    #543f86,
    #4e3c7d,
    #493874,
    #43346b,
    #3e3162
  );

  html {
    overflow: hidden !important;
  }
`

export const Space = styled.div`
  background: url(${(props) => props.background});
  background-repeat: repeat;
  background-position: center;
  width: 100%;
`

export const Earth = styled.img`
  position: absolute;
  top: 20%;
  left: 15%;
  animation: earth 150s infinite linear both;
  width: 100px;
`

export const Moon = styled.img`
  position: absolute;
  top: 12%;
  left: 25%;
  transform: rotate(0deg);
  transition: transform ease-in 0.5s;
  width: 80px;
  @media (max-width: 600px) {
    left: 30%;
  }
`

export const AstronautBox = styled.div`
  position: absolute;
  top: 70%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
`

export const Astronaut = styled.img`
  position: absolute;
  right: 20%;
  will-change: transform;
  animation: rotate-astronaut 200s infinite linear both alternate;
  width: 140px;
  @media (max-width: 600px) {
    width: 120px;
  }
`

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: calc(100vh - 240px);
  z-index: 1;
  h1 {
    font-size: 150px;
    font-weight: 800;
    color: #fff;
    @media (max-width: 600px) {
      font-size: 100px;
    }
  }
  p {
    font-size: 20px;
    margin-bottom: 20px;
    color: #fff;
  }
`

export const Button = styled(Link)`
  padding: 10px 15px;
  background-color: #ffcb39;
  color: #222;
  border-radius: 100px;
  font-weight: 500;
  text-align: center;
  transition: 0.3s;
  outline: 0;
  &:hover {
    box-shadow: 0px 0px 18px 0px rgba(255, 203, 57, 1);
  }
`
