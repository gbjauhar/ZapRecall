import deck from "./mock";
import Flashcard from "./Flashcards";
import React, { useState } from "react";
import styled from "styled-components";

export default function Perguntas(){
    const [inicio, setInicio] = useState(false)
    function True(){
        return(
             setInicio(true)
         )
     } 
    if(inicio === false){
        return(
        deck.map((p) => 
            <Pergunta onClick={True}>
                Pergunta {p.id}
            </Pergunta>))
    }else{
        return(
            deck.map((f) => (
                <Flashcard pergunta={f.pergunta} resposta={f.resposta}/>
            ))
        )

    }
}

const Pergunta = styled.div`
  width: 300px;
  height: 131px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p{
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }
  `