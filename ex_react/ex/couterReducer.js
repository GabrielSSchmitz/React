const INITIAL_STATE = { passo: 1, numero: 0 }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'INC':
            return { ...state, numero: state.numero + state.passo }
        case 'DEC':
            return { ...state, numero: state.numero - state.passo }
        case 'MUDANCA_PASSO':
            return { ...state, passo: +action.payload}
        default:
            return state
    }
}