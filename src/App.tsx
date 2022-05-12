import React, { useReducer } from 'react'
import './App.css'
import { PokemonInterface } from './types/PokemonType'
import PokemonInfo from './components/PokemonInfo'
import PokemonFilter from './components/PokemonFilter'
import PokemonTable from './components/PokemonTable'
import PokemonContext from './components/POKEMONContext'

// class App extends React.Component<
//   {},
//   {
//     filter: string
//     selectItem: PokemonInterface | null
//     pokemon: PokemonInterface[]
//   }
// > {
//   constructor(props: any) {
//     super(props)
//     this.state = {
//       filter: '',
//       selectItem: null,
//       pokemon: [],
//     }
//   }

//   componentDidMount() {
//     fetch('http://localhost:3000/ts-cra-test/pokemon.json')
//       .then((resp) => resp.json())
//       .then((pokemon) => this.setState({ ...this.state, pokemon }))
//   }

//   render(): React.ReactNode {
//     return (
//       <PokemonContext.Provider value={{

//       }}>
//         <div
//           style={{
//             margin: 'auto',
//             width: 800,
//             paddingTop: '1rem',
//           }}
//         >
//           <h1 className="title">Pokemon Search</h1>
//           <div style={{ display: 'grid', gridTemplateColumns: '70% 80%', gridColumnGap: '1rem' }}>
//             <div style={{ display: 'grid', gridTemplateColumns: '70% 30%', gridColumnGap: '1rem' }}>
//               <div>
//                 <PokemonFilter
//                   filter={this.state.filter}
//                   filterSet={(val: string) => this.setState({ ...this.state, filter: val })}
//                 />
//                 <PokemonTable
//                   filter={this.state.filter}
//                   pokemon={this.state.pokemon}
//                   setSelectItem={(pokemon: PokemonInterface) =>
//                     this.setState({ ...this.state, selectItem: pokemon })
//                   }
//                 />
//               </div>
//             </div>
//             {this.state.selectItem && <PokemonInfo {...this.state.selectItem} />}
//           </div>
//         </div>
//       </PokemonContext.Provider>
//     )
//   }
// }

type PokemonReducerType =
  | { type: 'SET_FILTER'; payload: string }
  | { type: 'SET_POKEMON'; payload: PokemonInterface[] }
  | { type: 'SET_SELECTED_POKEMON'; payload: PokemonInterface }

const pokemonReducer = (state: any, action: PokemonReducerType) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectItem: action.payload,
      }
    default:
      throw new Error('Error no action')
  }
}

function App() {
  // const [filter, setFilter] = React.useState('')
  // const [selectItem, setSelectItem] = React.useState<PokemonInterface | null>(null)
  // const [pokemon, setPokemon] = React.useState([])
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemon: [],
    filter: '',
    selectItem: null,
  })

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/ts-cra-test/pokemon.json')
  //     .then((resp) => resp.json())
  //     .then((p) => setPokemon(p))
  // }, [filter])

  React.useEffect(() => {
    fetch('http://localhost:3000/ts-cra-test/pokemon.json')
      .then((resp) => resp.json())
      .then((p) =>
        dispatch({
          type: 'SET_POKEMON',
          payload: p,
        })
      )
  }, [state.filter])

  if (!state.pokemon) {
    return <div>Loading data</div>
  }
  // filter,
  // setFilter,
  // selectItem,
  // setSelectItem,
  // pokemon,
  // setPokemon,
  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
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
    </PokemonContext.Provider>
  )
}

export default App
