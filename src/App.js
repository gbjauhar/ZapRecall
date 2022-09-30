import styled from 'styled-components';
import Perguntas from './perguntas';



export default function App(){
    return(
        <Screencontainer>
            <Logocontainer>
                <Logo src="./assets/img/logo.png"/>
                <Titulo>ZapRecall</Titulo>
            </Logocontainer>
            <Perguntas/>
            <Footer>
                <Botões> 
                    <Vermelho>Não lembrei</Vermelho>
                    <Amarelo>Quase não lembrei</Amarelo>
                    <Verde>Zap!</Verde>
                </Botões>
                    0/4 concluídos
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

  const Titulo = styled.h1`
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
  `

  const Footer = styled.footer`
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