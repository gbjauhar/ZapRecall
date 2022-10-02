import styled from 'styled-components';
import React, { useState } from 'react';
import turn from "./assets/img/seta_virar.png"
import play from "./assets/img/seta_play.png"
import right from "./assets/img/icone_certo.png"
import almost from "./assets/img/icone_quase.png"
import wrong from "./assets/img/icone_erro.png"


export default function Flashcards(props) {
    const [start, setStart] = useState(1)
    const [changeColor, setChangeColor] = useState('#000000')
    const [img, setImg] = useState(play)
    const [line, setLine] = useState('')
    const { count, setCount } = props
    function True() {
        return (
            setStart(start + 1)
        )

    }

    function changeRed(){
        setCount(count + 1)
        setStart(1)
        setChangeColor('#FF3030')
        setImg(wrong)
        setLine('line-through')
    }

    function changeGreen(){
        setCount(count + 1)
        setStart(1)
        setChangeColor('#2FBE34')
        setImg(right)
        setLine('line-through')
    }

    function changeYellow(){
        setCount(count + 1)
        setStart(1)
        setChangeColor('#FF922E')
        setImg(almost)
        setLine('line-through')
    }
    if (start === 1) {
        return (
            <ClosedQuestion changeColor={changeColor} line={line} key={props.id}>
                <p>Pergunta {props.id}</p>
                <img src={img} onClick={True} />
            </ClosedQuestion>)
    }
    else if (start === 2) {
        return (
            <OpenedQuestion>
                <p>{props.question}</p>
                <img src={turn} onClick={True}
                />
            </OpenedQuestion>

        )
    }
    else if (start === 3) {
        return (
            
            <OpenedQuestion>
                <p>{props.answer}</p>
                <Buttons>
                <Red onClick={changeRed}>Não lembrei</Red>
                <Yellow onClick={changeYellow}>Quase não lembrei</Yellow>
                <Green onClick={changeGreen}>Zap!</Green>
            </Buttons>
            </OpenedQuestion>
            
            
        )
    }
}



const OpenedQuestion = styled.div`
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

const ClosedQuestion = styled.div`
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
color:${props => props.changeColor};
text-decoration:${props => props.line}
}
`

const Buttons = styled.div`
display: flex;
width: 80%;
justify-content: space-between;
margin: 20px;
`

const Red = styled.button`
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

const Green = styled.button`
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

const Yellow = styled.button`
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
