import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmedInputValue = inputValue.trim()
    if(trimmedInputValue.length <= 1) return
    onNewCategory(trimmedInputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}