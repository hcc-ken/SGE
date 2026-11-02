export interface APIZeldaResponse {
    data: DataZelda[]
    message: string
    status: number
}

export interface DataZelda {
    category: string
    common_locations: string[]
    cooking_effect: string
    description: string
    dlc: boolean
    hearts_recovered: number
    id: number
    image: string
    name: string
}
