import Button from '@mui/material/Button'
import { PokemonInterface } from '../types/PokemonType'

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
        <Button variant="contained" color="success" onClick={() => onSelect(pokemonProps)}>
          Sellect!
        </Button>
      </td>
    </tr>
  )
}

export default PokemonRow
