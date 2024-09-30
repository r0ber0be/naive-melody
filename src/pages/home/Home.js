import { FloatButton } from "antd";
import { CardLetter } from "../../components/cardLetter/CardLetter";
import { EmptyList } from "../../components/emptyList/EmptyList";

export default function Home({ letters, setLetters }) {
  return (
    <>
      {
        letters && letters.length > 0 
          ? <CardLetter letters={letters} setLetters={setLetters} />
          : <EmptyList />
      }
      <FloatButton.BackTop tooltip="Voltar ao topo" />
    </>
  )
}