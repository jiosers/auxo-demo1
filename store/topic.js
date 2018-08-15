export const state=()=>({topics:[]})
export const mutations={
    create(state,topics){
        state.topics.push(topics)
    },
    init(state,topics){
        state.topics=topics
    }
}