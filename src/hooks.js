import { createContext, useContext, useReducer } from "react"

const CountContext = createContext()
const useCountContext = () => {
  const context = useContext(CountContext)
  if (!context) { throw new Error("---- Missing Count Context") }

  return context
}

/** state: number */
const countReducer = (state, action) => {
  switch (action.type) {
    case "UP":
      return state + action.delta
    case "DOWN":
      return state - action.delta
    default:
      return state
  }
}
const useCount = () => {
  const [count, countDispatch] = useReducer(countReducer, 0)

  return { count, countDispatch }
}


export { CountContext, useCountContext, useCount}