import create from 'zustand'
import { PokemonInterface } from './types/PokemonType'

const useStore = create((set) => ({
  pokemon: [],
  filter: '',
  selecItem: null,
  setPokemon: (pokemon: PokemonInterface) => set((state: any) => ({ ...state, pokemon })),
  setFilter: (filter: string) => set((state) => ({ ...state, filter })),
  setSelectItem: (selectItem: PokemonInterface) => set((state) => ({ ...state, selectItem })),
}))

export default useStore
