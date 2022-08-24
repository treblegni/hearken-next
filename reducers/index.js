import { combineReducers } from 'redux'
import { homeSlice } from './homeSlice'

export default combineReducers({
	[homeSlice.name]: homeSlice.reducer
})