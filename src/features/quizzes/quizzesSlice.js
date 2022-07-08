import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {useDispatch} from 'react-redux'
import { addQuizToTopic } from "../topics/topicsSlice";

export const thunkCreateNewQuiz = (quiz)=>{
    return (dispatch, getState) => {
        // console.log('thunk parameter quiz: ')
        // console.log(quiz)
        dispatch(addQuiz(quiz))
        const {id, topicId} = quiz
        dispatch(addQuizToTopic({quizId: id, topicId: topicId}))
    }
} 

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes:{}},
    reducers: {
        addQuiz: (state, action) => {
            // console.log('addQuiz called')
            state.quizzes[action.payload.id] = action.payload
            // console.log('quizzes:')
            // console.log(current(state).quizzes)
        }
    }
})


export const {addQuiz} = quizzesSlice.actions
export const selectQuizzes = (state) => state.quizzes.quizzes
export default quizzesSlice.reducer