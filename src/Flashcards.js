import styled from 'styled-components';
import React, { useState } from 'react';


export default function Flashcard(props){
    const [start, setStart] = useState(false)
    function True(){
       return(
            setStart(true)
        )
    } 
    
    if(start === false){
        return(
            <Pergunta>
            <p>{props.pergunta}</p>
            <img src="./assets/img/seta_virar.png" onClick={True} //agora tem que guardar a pergunta que foi clicada
            />
            </Pergunta>
        )
    }else{
        return(
            <Pergunta>
        <p>{props.resposta}</p>
        </Pergunta>
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