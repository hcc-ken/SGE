export interface Zeldaresponse {
  data: Zelda[]
  message: string
  status: number
}

export interface Zelda {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  edible: boolean
  id: number
  image: string
  name: string
  cooking_effect?: string
  hearts_recovered?: number
  properties: Properties
}

export interface Properties {
  attack?: number
  defense?: number
}
