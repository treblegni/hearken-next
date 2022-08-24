import { createSlice } from '@reduxjs/toolkit'

const 
	initialState = {
		theme: '',
		greeting: ''
	}

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		theme(state,action) {
			switch(action.type) {
				case 'UPDATE_THEME':
					return state.theme = action.theme
				default:
					return state
			}
		},
		greeting(state,action) {
			switch(action.type) {
				case 'UPDATE':
					return action.greeting
				case 'CLEAR':
					return state.greeting = ''
				case 'LOG':
					return console.log(greeting)
				default: 
					return state
			}
		}
	}
})

// exporting actions and root reducer
export const { theme,greeting } = homeSlice.actions
export default homeSlice.reducer