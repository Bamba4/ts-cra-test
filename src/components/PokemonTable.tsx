import { useContext } from 'react'
import useStore from '../store'
import { PokemonInterface } from '../types/PokemonType'
import PokemonContext from './POKEMONContext'
import PokemonRow from './PokemonRow'

// const PokemonTable = () => {
//   // const { filter, pokemon, setSelectItem } = useContext(PokemonContext) Use context
//   const {
//     state: { pokemon, filter },
//     dispatch,
//   } = useContext(PokemonContext)
//   return (
//     <table width="100%">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Type</th>
//         </tr>
//       </thead>
//       <tbody>
//         {pokemon
//           .filter((p: PokemonInterface) =>
//             p.name.english.toLowerCase().includes(filter.toLowerCase())
//           )
//           .slice(0, 20)
//           .map((p: PokemonInterface) => (
//             <PokemonRow
//               key={p.id}
//               pokemonProps={p}
//               onSelect={(pokemonValue: PokemonInterface) =>
//                 dispatch({
//                   type: 'SET_SELECTED_POKEMON',
//                   payload: pokemonValue,
//                 })
//               }
//             />
//           ))}
//       </tbody>
//     </table>
//   )
// }

const PokemonTable = () => {
  const pokemon = useStore((state: any) => state.pokemon)
  const filter = useStore((state: any) => state.filter)
  const setSelectItem = useStore((state: any) => state.setSelectItem)

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((p: PokemonInterface) =>
            p.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((p: PokemonInterface) => (
            <PokemonRow
              key={p.id}
              pokemonProps={p}
              onSelect={(pokemonValue: PokemonInterface) => setSelectItem(pokemonValue)}
            />
          ))}
      </tbody>
    </table>
  )
}

export default PokemonTable
