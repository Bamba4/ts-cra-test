import React, { useReducer } from 'react'
import './App.css'
import { PokemonInterface } from './types/PokemonType'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonContext from './components/POKEMONContext'
import useStore from './store'

// type PokemonReducerType =
//   | { type: 'SET_FILTER'; payload: string }
//   | { type: 'SET_POKEMON'; payload: PokemonInterface[] }
//   | { type: 'SET_SELECTED_POKEMON'; payload: PokemonInterface }

// const pokemonReducer = (state: any, action: PokemonReducerType) => {
//   switch (action.type) {
//     case 'SET_FILTER':
//       return {
//         ...state,
//         filter: action.payload,
//       }
//     case 'SET_POKEMON':
//       return {
//         ...state,
//         pokemon: action.payload,
//       }
//     case 'SET_SELECTED_POKEMON':
//       return {
//         ...state,
//         selectItem: action.payload,
//       }
//     default:
//       throw new Error('Error no action')
//   }
// }

function App() {
  const pokemon = useStore((state: any) => state.pokemon)
  const setPokemon = useStore((state: any) => state.setPokemon)
  const filter = useStore((state: any) => state.filter)

  React.useEffect(() => {
    fetch('http://localhost:3000/ts-cra-test/pokemon.json')
      .then((resp) => resp.json())
      .then(
        (p) => setPokemon(p)
        // dispatch({
        //   type: 'SET_POKEMON',
        //   payload: p,
        // })
      )
  }, [filter])

  if (!pokemon) {
    return <div>Loading data</div>
  }

  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '70% 80%', gridColumnGap: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gridColumnGap: '1rem' }}>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
        </div>
        <PokemonInfo />
      </div>
    </div>
  )
}

export default App
