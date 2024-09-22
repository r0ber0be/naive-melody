import { FormLetter } from "../../components/formLetter/FormLetter";

export default function AddLetter({ setLetters }) {
  return (
    <div className="form-letter">
      <FormLetter setLetters={setLetters} />
    </div>
  )
}