import styled from 'styled-components';
import React, { useState } from 'react';
import setavirar from "./assets/img/seta_virar.png"
import setaplay from "./assets/img/seta_play.png"


export default function Flashcards(props) {
    const [start, setStart] = useState(1)
    const [cor, setCor] = useState('#000000')
    const { contador, setContador } = props
    function True() {
        return (
            setStart(start + 1)
        )

    }

    function botaoVermelho(){
        setContador(contador + 1)
        setStart(1)
        setCor('#FF3030')
    }

    function botaoVerde(){
        setContador(contador + 1)
        setStart(1)
        setCor('#2FBE34')
    }

    function botaoAmarelo(){
        setContador(contador + 1)
        setStart(1)
        setCor('#FF922E')
    }
    if (start === 1) {
        return (
            <PerguntaFechada corMudada={cor} key={props.id}>
                <p>Pergunta {props.id}</p>
                <img src={setaplay} onClick={True} />
            </PerguntaFechada>)
    }
    else if (start === 2) {
        return (
            <PerguntaAberta>
                <p>{props.pergunta}</p>
                <img src={setavirar} onClick={True}
                />
            </PerguntaAberta>

        )
    }
    else if (start === 3) {
        return (
            
            <PerguntaAberta>
                <p>{props.resposta}</p>
                <Botões>
                <Vermelho onClick={botaoVermelho}>Não lembrei</Vermelho>
                <Amarelo onClick={botaoAmarelo}>Quase não lembrei</Amarelo>
                <Verde onClick={botaoVerde}>Zap!</Verde>
            </Botões>
            </PerguntaAberta>
            
            
        )
    }
}



const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  height: 131px;
  padding: 15px;
 min-height: 100px;;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
    position: absolute;
    bottom:10px;
    right:10px;
  }
  `

const PerguntaFechada = styled.div`
width: 300px;
height: 35px;
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
color:${props => props.corMudada}
}
`

const Botões = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`

const Vermelho = styled.button`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  `

const Verde = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: #2FBE34;
border-radius: 5px;
border: 1px solid blue;
padding:5px;
`

const Amarelo = styled.button`
width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: #FF922E;
border-radius: 5px;
border: 1px solid blue;
padding:5px;
`
