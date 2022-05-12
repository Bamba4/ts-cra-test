import { useContext } from 'react'
import PokemonContext from './POKEMONContext'

const PokemonInfo = () => {
  const {
    state: { selectItem },
  } = useContext(PokemonContext)
  return selectItem ? (
    <div>
      <h1>{selectItem.name.english}</h1>
      <table>
        {Object.keys(selectItem.base).map((key) => (
          <tbody key={key}>
            <tr>
              <td>{key}</td>
              <td>{selectItem.base[key]}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  ) : null
}

export default PokemonInfo
