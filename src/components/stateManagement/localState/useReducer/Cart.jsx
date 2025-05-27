import { useReducer } from 'react'

export default function Cart() {
  const initialState = []

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.item]
      case 'REMOVE':
        return state.filter((item) => item.id !== action.id)
      case 'CLEAR':
        return []
      case 'INCREASE_QTY':
        return state.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        )
      default:
        return state
    }
  }

  const [cart, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <button
        onClick={() =>
          dispatch({ type: 'ADD', item: { id: 1, name: 'Item A', qty: 1 } })
        }
      >
        Add Item A
      </button>
      <button onClick={() => dispatch({ type: 'INCREASE_QTY', id: 1 })}>
        Increase Qty
      </button>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear Cart</button>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} (Qty: {item.qty})
          </li>
        ))}
      </ul>
    </>
  )
}
