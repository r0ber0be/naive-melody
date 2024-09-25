import { FloatButton } from "antd";
import { CardLetter } from "../../components/cardLetter/CardLetter";
import { EmptyList } from "../../components/emptyList/EmptyList";
import PageHeader from "../../components/pageHeader/PageHeader";

export default function Home({ letters, setLetters }) {
  return (
    <>
      <PageHeader />
      {
        letters 
          ? <CardLetter letters={letters} setLetters={setLetters} />
          : <EmptyList />
      }
      <FloatButton.BackTop tooltip="Voltar ao topo" />
    </>
  )
}