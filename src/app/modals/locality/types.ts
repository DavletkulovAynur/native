//нУЖНЫ ЭТИ ТИПЫ
export enum FOCUS_INPUT {
  DEPARTURE = "departureInput",
  ARRIVAL = "arrivalInput",
}

export type TModalLocalitySearchParams = {
  focusInput?: FOCUS_INPUT;
}