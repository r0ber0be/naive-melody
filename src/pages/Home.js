import { useState } from "react";
import { CardLetter } from "../components/cardLetter/CardLetter";
import PageHeader from "../components/pageHeader/PageHeader";
import { initialLetters } from "../utils/data";

export default function Home() {
  // Procura chaves com o nome letters no local storage, caso tenha, os valores serão salvos na constante
  const localLettersValue = localStorage.getItem('letters')
  /* Como os valores salvos no local storage são strings é necessário transformar essa string em um objeto JSON
     com o método parse, passando os valores encontrados no local storage (se houverem) */
  const localLettersParsed = JSON.parse(localLettersValue)
  /* Inicia o estado de letters com as cartas pré escritas na aplicação, mas somente caso localLettersParsed 
  seja nulo ou undefined, caso não seja, as cartas serão carregadas com base no que está salvo no seu local storage*/
  const [letters, setLetters] = useState(() => localLettersParsed || initialLetters)

  return (
    <>
      <PageHeader setLetters={setLetters} />
      <CardLetter letters={letters} setLetters={setLetters} />
    </>
  )
}