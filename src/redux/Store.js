import { configureStore } from '@reduxjs/toolkit'
import taskreducer from "./TaskSlice/TaskSlice"

export const store = configureStore({
  reducer: {task:taskreducer},
})