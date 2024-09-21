export const letterSpliter = (letters) => {
  return letters.map(({ letter }) => {
    return letter.split(/\s(?=[A-Z])/g) // 'Reparte' a carta onde há espaços seguidos de uma letra maiuscula
  })
}