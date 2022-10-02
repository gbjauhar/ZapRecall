import deck from "./mock";
import Flashcards from "./Flashcards";


export default function FlashcardsList(props){
return(
            deck.map((f) => (
                <Flashcards key={f.id} pergunta={f.pergunta} resposta={f.resposta}  id={f.id}/>
            ))
        )

    }

