import { useReducer } from "react";


const initialState = {
  counter: 0,
  userName: "",
  address: { city: '', street: '' }
}

// Definir o tipo do estado
type State = {
  counter: number;
  userName: string;
  address: { street: string; city: string; }
}

// Definimos o que será feito com o estado
type Action =
  { type: "increment" } |
  { type: "decrement" } |
  { type: "resetState" } |
  { type: "updateUserName", name: string } |
  {
    type: "updateAddress";
    data: {
      street: string;
      city: string;
    }
  };


// Função que irá transformar nosso estado
function reducer(state: State, action: Action) {
  // console.log(state, action)


  switch (action.type) {
    case 'increment':
      return {
        ...state, // copia estado aterior
        counter: state.counter + 1, // atualiza o estado atual
      }

    case 'decrement':
      return {
        ...state, // copia estado aterior
        counter: state.counter - 1, // atualiza o estado atual
      }

    case 'updateUserName':
      return {
        ...state, // copia estado aterior
        userName: action.name // atualiza o estado atual
      }

    case "updateAddress":
      return {
        ...state, // copia estado aterior
        address: action.data // atualiza o estado atual
      }

    case "resetState":
      return initialState; // zera tudo

    default: {
      return state;
    }
  }
}



export function Main() {
  // Chamando o hook useReducer 
  // 'dispatch' é uma função semelhante ao 'set...' do hook 'useState'

  // const [state, dispatch] = useReducer(reducer, { counter: 0 })
  const [{ counter, userName }, dispatch] = useReducer(reducer, initialState)

  function updateAddress() {
    dispatch({
      type: 'updateAddress',
      data: {
        city: 'Rio de Janeiro',
        street: 'Raul Marinho',
      }
    })
  }


  return (
    <>
      <div className="mt-6 mb-20">
        <h1 className="text-5xl">Reducer</h1>
      </div>
      <ul>
        <li>
          <strong className="text-9xl text-opacity-10">{counter}</strong>
        </li>
      </ul>
      <div className="flex justify-evenly">
        <button onClick={() => dispatch({ type: "increment" })} className="w-60 p-2 bg-gray400 text-6xl active:bg-opacity-20 rounded-md">+</button>
        <button onClick={() => dispatch({ type: "decrement" })} className="w-60 p-2 bg-violet200 text-6xl active:bg-opacity-20 rounded-md">-</button>
      </div>

      <div>
        <input
          className="mt-24 p-5 rounded-md h-12 w-3/6 text-gray600 text-2xl"
          type="text"
          value={userName}
          onChange={ev => {
            dispatch({
              type: "updateUserName",
              name: ev.target.value
            })
          }}
        />
      </div>
      <button
        onClick={() => dispatch({ type: "resetState" })}
        className="mt-8 w-52 p-1 bg-violet200 text-6xl active:bg-opacity-20 rounded-md">Reset</button>
    </>
  )
}