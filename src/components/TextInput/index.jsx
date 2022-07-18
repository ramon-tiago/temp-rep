import './styles.css';

export const TextInput = ({ searchValue, handlechange }) => {
  return (

    <input
      type="search"
      placeholder="Type your serach"
      className='text-input'
      value={searchValue}
      onChange={handlechange}
    />

  )
}