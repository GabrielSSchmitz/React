export function inc() {
    return { type: 'INC' }
}

export function dec() {
    return { type: 'DEC' }
}

export function mudancaPasso(e) {
    return {
        type: 'MUDANCA_PASSO',
        payload : e.target.value
    }
}