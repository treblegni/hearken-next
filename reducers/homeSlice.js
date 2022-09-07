import { createSlice } from '@reduxjs/toolkit'

const 
	initialState = {
		theme: ''
	}

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		updateTheme(state,action) {
			if (action.payload) {
				state.theme = action.payload
			}
		}
	}
})

// exporting actions and root reducer
export const { updateTheme } = homeSlice.actions
export default homeSlice.reducer