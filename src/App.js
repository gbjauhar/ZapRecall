import styled from 'styled-components';
import logo from "./assets/img/logo.png"
import deck from './mock';
import Flashcards from './Flashcards';
import React, { useState } from 'react';


export default function App() {
    const [count, setCount] = useState(0)

    return (
        <Screencontainer>
            <Logocontainer>
                <Logo src={logo} />
                <Title>ZapRecall</Title>
            </Logocontainer>
            <>{deck.map((f) => (
                <Flashcards data-identifier="flashcard" count={count} setCount={setCount} key={f.id} question={f.question} answer={f.answer} id={f.id} />
            ))}
            </>
            <Footer data-identifier="flashcard-counter">

                {count}/{deck.length} concluídos
            </Footer>
        </Screencontainer>
    )
}


const Screencontainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`

const Logocontainer = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  `

const Logo = styled.img`
  width: 52px;
  `

const Title = styled.h1`
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  `

const Footer= styled.footer`
width: 100%;
min-height: 50px;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Recursive';
font-weight: 400;
font-size: 18px;
color: #333333;
padding: 10px;
`