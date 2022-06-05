import { useReducer } from "react"
import { Productos } from "./../types/types"

interface FormularioEstado{
    ingresoDatos: Productos
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const ESTADO_INICIAL = {
    id: 0,
    nombre: '',
    descripcion:'',
    imagen:'',
    precio: 0,
    stock: 0,
}

const formReducer = (state: FormularioEstado["ingresoDatos"], action: FormReducerAction) => {
    switch (action.type){
        case "change_value":
            const {inputName, inputValue} = action.payload
        return{
            ...state,
            [inputName]: inputValue
        }
        case "clear":
            return ESTADO_INICIAL

        default:
            return state
    }
}

const useNewProductosForm = () => {
    return useReducer(formReducer, ESTADO_INICIAL)
}

export default useNewProductosForm