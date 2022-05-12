import { useContext } from 'react'
import PokemonContext from './POKEMONContext'

const PokemonFilter = () => {
  // const { filter, setFilter } = useContext(PokemonContext)
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext)

  return (
    <input
      type="text"
      value={filter}
      onChange={(evt) =>
        dispatch({
          type: 'SET_FILTER',
          payload: evt.target.value,
        })
      }
    />
  )
}

export default PokemonFilter
