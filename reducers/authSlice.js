import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const UserRegistration = createAsyncThunk('user/register',async ({username,email,dob},{ rejectWithValue }) => {
	try {
		const config = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: {
				username: '',
				email: '',
				dob: ''
			}
		}
		fetch('/api/users/login',config)
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => console.log(err))
	}
	catch (err) {
		console.log(err)
	}
})

const 
	initialState = {
		user: ''
	}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateUser(state,action) {
			if (action.payload) {
				state.user = action.payload
			}
		}
	},
	extraReducers: {
		[registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
	}
})

// exporting actions and root reducer
export const { updateUser } = authSlice.actions
export default authSlice.reducer