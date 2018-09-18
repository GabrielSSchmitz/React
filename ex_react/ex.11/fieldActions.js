export function verificaMudanca(e){
    console.log('verificaMudanca')
    return{
        type: 'VERIFICA_MUDANCA',
        payload: e.target.value
    }
}