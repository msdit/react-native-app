import { flightListTypes } from './general'
interface IAirline {
    farsi: string
    iata: string
    icao: string
}

interface IScheduled {
    scheduled: string
    actual?: string
}

interface IStatus {
    status: string
    color: string
    farsi: string
    english: string
}

interface ISecondStatus {
    status: string
    farsi: string
}

export interface IFlightInfo {
    origin: string
    destination: string
    airline: IAirline
    terminal: string
    isInternational: boolean
    departure: IScheduled
    arrival: IScheduled
    airplaneType: string
    flightNumber: string
    status: IStatus
    secondStatus: ISecondStatus
    farsiDayOfWeek: string
    counter?: string
    gate?: string
    belt?: string
}

export interface IFlightCleanInfo {
    airport: string
    type: flightListTypes
    logo: string
    toFromLabel: string
    toFromValue: string
    airlineName: string
    airlineIATA: string
    terminal: string
    counter?: string
    gate?: string
    belt?: string
    status: string
    airplaneType: string
    flightNumber: string
    scheduledTime: string
    actualTime?: string
}