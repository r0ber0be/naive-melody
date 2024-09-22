import { CardLetter } from "../../components/cardLetter/CardLetter";
import PageHeader from "../../components/pageHeader/PageHeader";

export default function Home({ letters, setLetters }) {
  return (
    <>
      <PageHeader />
      <CardLetter letters={letters} setLetters={setLetters} />
    </>
  )
}