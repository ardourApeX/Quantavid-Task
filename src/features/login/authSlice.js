import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const loggedInUser = createAsyncThunk(
	"/auth/login",
	async (userInfo, thunkAPI) => {
		try {
			const serverResponse = await axios.post(
				process.env.REACT_APP_URL + "/login",
				{
					email: userInfo.email,
					password: userInfo.password,
				}
			);
			return serverResponse.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
export const signupUser = createAsyncThunk(
	"/auth/signup",
	async (userInfo, thunkAPI) => {
		try {
			const serverResponse = await axios.post(
				process.env.REACT_APP_URL + "/signup",
				{
					name: userInfo.name,
					email: userInfo.email,
					password: userInfo.password,
				}
			);
			return serverResponse.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
const initialAuthState = {
	authState: {},
	authStatus: "idle",
	authError: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initialAuthState,
	reducers: {
		logout: (state) => {
			state.authSlice = [];
			localStorage.clear();
		},
	},
	extraReducers: {
		[loggedInUser.pending]: (state) => {
			state.authStatus = "loading";
		},
		[loggedInUser.fulfilled]: (state, action) => {
			state.authState.accessToken = action.payload.data.accessToken;
			state.authState.id = action.payload.data.id;
			localStorage.setItem("userId", JSON.stringify(action.payload.data.id));
			localStorage.setItem(
				"accessToken",
				JSON.stringify(action.payload.data.accessToken)
			);
			localStorage.setItem("isUserLogin", JSON.stringify(true));
			state.authStatus = "fulfilled";
		},
		[loggedInUser.rejected]: (state, action) => {
			state.authStatus = "rejected";
			state.authError = action.error.message;
			console.log(action.error.message);
			state.authState = {};
			localStorage.clear();
		},
		[signupUser.pending]: (state) => {
			state.authStatus = "loading";
		},
		[signupUser.fulfilled]: (state, action) => {
			state.authStatus = "fulfilled";
			state.authState = {};
		},
		[signupUser.rejected]: (state, action) => {
			console.log(action.error.message);
			state.authStatus = "rejected";
			state.authError = action.error.message;
		},
	},
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
