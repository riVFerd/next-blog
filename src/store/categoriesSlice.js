import {createSlice} from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        setCategories: (state, action) => {
            return action.payload;
        }
    }
});

export const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const categories = await response.json();

    return categories.map((category) => ({
        id: category._id,
        name: category.name,
    }));
};

export const {setCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;