export interface Pokemon {
    abilities: Ability[]
    cries: {
    latest: string
  }
    height: number
    id: number
    location_area_encounters: string
    name: string
    order: number
    stats: Stat[]
    types: Type[]
    weight: number
  }
  export interface Ability {
    ability: {
    name: string
    url: string
  }
    is_hidden: boolean
    slot: number
  }
  
  
  export interface Type {
    slot: number
    type: {
    name: string
    url: string
  }
  }
  
  
  export interface Stat {
    base_stat: number
    effort: number
    stat:  {
    name: string
    url: string
  }
  }
  