import { createSlice } from "@reduxjs/toolkit";
import langTexts from "../data/langTexts";

const initialState = {
    lang: localStorage.getItem("lang") || "tr",
};

export const languageSlice = createSlice({
    name: "language",
    initialState: initialState,
    reducers: {
        changeLang: (state, action) => {
            state.lang = action.payload;
            window.localStorage.setItem("lang", action.payload);
        },
        /*     increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }, */
    },
});

const clone = (val) => {
    return JSON.parse(JSON.stringify(val));
};

export const translateText = (text) => {
    const { lang } = languageSlice.getInitialState();
    return langTexts[lang][text] || text;
};

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = languageSlice.actions
export const { changeLang } = languageSlice.actions;

export default languageSlice.reducer;
