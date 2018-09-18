const INITIAL_STATE = { value: 'Opa' }

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'VERIFICA_MUDANCA':
            return { value: action.payload }
        default:
            return state
    }
}