
export const state=()=>({
    txt:'test'
})
export const mutations={
    change(state,txt){
        state.txt=txt;
    }
}