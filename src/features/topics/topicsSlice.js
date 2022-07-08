import {createSlice, current} from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics:{}},
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                ...action.payload,
                quizIds: []
            }
        },
        addQuizToTopic: (state, action) => {
            // console.log('addQuizToTopic called')
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
            // console.log('topics: ')
            // console.log(current(state).topics)
        }
    }
})

export const selectTopics = (state) => state.topics.topics
export const {addTopic, addQuizToTopic} = topicsSlice.actions
export default topicsSlice.reducer
