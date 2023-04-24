import {createSlice} from "@reduxjs/toolkit";
import getClient from "@/utils/connection";

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
    const categories = await getClient().fetch(`*[_type == "category"]`);

    return categories.map((category) => ({
        id: category._id,
        name: category.name,
    }));
};

export const {setCategories} = categoriesSlice.actions;

export default categoriesSlice.reducer;