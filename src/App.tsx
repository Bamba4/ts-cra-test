import React from 'react'
import pokemon from './pokemon.json'
import './App.css'

interface PokemonInterface {
  id: number
  name: Name
  type: string[]
  base: Base
}

interface Base {
  HP: number
  Attack: number
  Defense: number
  'Sp. Attack': number
  'Sp. Defense': number
  Speed: number
}

interface Name {
  english: string
  japanese: string
  chinese: string
  french: string
}

const PokemonRow = ({
  pokemonProps,
  onSelect,
}: {
  pokemonProps: PokemonInterface
  onSelect: { (p: PokemonInterface): void }
}) => {
  return (
    <tr>
      <td>{pokemonProps.name.english}</td>
      <td>{pokemonProps.type.join(', ')}</td>
      <td>
        <button onClick={() => onSelect(pokemonProps)}>Sellect!</button>
      </td>
    </tr>
  )
}

function App() {
  const [filter, setFilter] = React.useState('')
  const [selectItem, setSelectItem] = React.useState<PokemonInterface | null>(null)
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
            <input type="text" value={filter} onChange={(evt) => setFilter(evt.target.value)} />
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
          </div>
        </div>
        {selectItem && (
          <div>
            <h1>{selectItem.name.english}</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
