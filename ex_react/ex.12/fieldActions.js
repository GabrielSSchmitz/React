export function verificaMudanca(e){
    return{
        type: 'VERIFICA_MUDANCA',
        payload: e.target.value
    }
}