import useStore from '../store'

const PokemonFilter = () => {
  const filter = useStore((state: any) => state.filter)
  const setFilter = useStore((state: any) => state.setFilter)

  return <input type="text" value={filter} onChange={(evt) => setFilter(evt.target.value)} />
}

export default PokemonFilter
