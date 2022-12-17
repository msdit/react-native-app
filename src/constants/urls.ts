const urls = {
    AIRPORTS: 'airports',
    ARRIVAL: (airport: string) => `${airport}/arrival`,
    DEPARTURE: (airport: string) => `${airport}/departure`,
}

export type requestKeyType = keyof typeof urls

export default urls