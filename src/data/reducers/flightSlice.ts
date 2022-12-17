import { flightListTypes } from './../../types/general'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../axios'
import urls from 'const/urls'
import { IAirportInfo } from 'ts/airports'
import { IFlightCleanInfo, IFlightInfo } from 'ts/flights'
import { AppDispatch, RootState } from '../store'
import phrases from 'const/phrases'
import { dateFormatter } from 'data/helpers/datetime'

interface IFlightState {
  airports: IAirportInfo[],
  flightsList: IFlightCleanInfo[],
}

const initialState: IFlightState = {
  airports: [],
  flightsList: []
}

const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    updateAirports: (state, action: PayloadAction<IAirportInfo[]>) => {
      state.airports = action.payload || []
    },
    resetFlightList: (state) => {
      state.flightsList = []
    },
    updateFlightList: (state, action: PayloadAction<IFlightCleanInfo[]>) => {
      state.flightsList = action.payload || []
    },
  },
})

export const { updateAirports, resetFlightList, updateFlightList } = flightSlice.actions

export const fetchAirPorts = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  const req = await axios.get(urls.AIRPORTS)
  const res = req?.data?.result
  dispatch(updateAirports(res))
}

export const fetchFlights = (type: flightListTypes, airport: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const req = await axios.get(urls[type](airport))
  const res = req?.data?.result || []
  const cleanedResult: IFlightCleanInfo[] = res.map((item: IFlightInfo) => {
    const { airline, terminal, counter, gate, belt, airplaneType, flightNumber } = item
    const airlineName = airline.farsi
    const airlineIATA = airline.iata

    const isArrival = type === 'ARRIVAL'

    const toFromLabel = isArrival ? phrases.From : phrases.To
    const toFromValue = isArrival ? item.origin : item.destination

    const time = isArrival ? item.arrival : item.departure
    const scheduledTime = time ? dateFormatter(time.scheduled) : '-'
    const actualTime = (time && time?.actual) ? dateFormatter(time.actual) : undefined

    let status = item.status.status
    status += (item.secondStatus?.status && item.secondStatus.farsi) ? (' | ' + item.secondStatus?.status) : ''
    status += (isArrival && item?.belt) ? (' | BELT: ' + item?.belt) : ''
    status += (!isArrival && item?.counter) ? (' | COUNTER: ' + item?.counter) : ''
    status += (!isArrival && item?.gate) ? (' | GATE: ' + item?.gate) : ''

    const logo = `https://cdn.alibaba.ir/static/img/airlines/Domestic/${airlineIATA}.png`

    return {
      airlineName,
      airlineIATA,
      type,
      airport,
      toFromLabel,
      toFromValue,
      scheduledTime,
      actualTime,
      status,
      terminal,
      counter,
      gate,
      belt,
      airplaneType,
      flightNumber,
      logo
    }
  })

  dispatch(updateFlightList(cleanedResult))
}

export const airportsSelector = (state: RootState) => state.flight.airports
export const flightsListSelector = (state: RootState) => state.flight.flightsList

export default flightSlice.reducer
