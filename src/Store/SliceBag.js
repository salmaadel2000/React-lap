import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, deleteBag, editBag, addNew ,getById} from '../api/bagApi';

const initialState = {
    bags: [],
    load: false,
    error: null
};

export const getAllBags = createAsyncThunk(
    "bags/getAllBags",
    async (_, thunkAPI) => {
        try {
            const response = await getAll();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteBagById = createAsyncThunk(
    "bags/deleteBagById",
    async (id, thunkAPI) => {
        try {
            await deleteBag(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const getBagById = createAsyncThunk(
    "bags/getBagById",
    async (id, thunkAPI) => {
        try {
            const response = await getById(id);
            return response.data;;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const editBagById = createAsyncThunk(
    "bags/editBagById",
    async ({ id, bag }, thunkAPI) => {
        try {
            const response = await editBag(id, bag);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const addNewBag = createAsyncThunk(
    "bags/addNewBag",
    async (bag, thunkAPI) => {
        try {
            const response = await addNew(bag);
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const SliceBag = createSlice({
    name: 'bags',
    initialState,
    selectedBag: null,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBags.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(getAllBags.fulfilled, (state, action) => {
                state.load = false;
                state.bags = action.payload;
            })
            .addCase(getAllBags.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            })
            .addCase(deleteBagById.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(deleteBagById.fulfilled, (state, action) => {
                state.load = false;
                state.bags = state.bags.filter(bag => bag.id !== action.payload);
            })
            .addCase(deleteBagById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            })
            .addCase(addNewBag.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(addNewBag.fulfilled, (state, action) => {
                state.load = false;
                state.bags.push(action.payload); 
            })
            .addCase(addNewBag.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            }).addCase(getBagById.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(getBagById.fulfilled, (state, action) => {
                state.load = false;
                state.selectedBag = action.payload;
                console.log(state.selectedBag)
            })
            .addCase(getBagById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            }) .addCase(editBagById.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(editBagById.fulfilled, (state, action) => {
                state.load = false;
                state.selectedBag = action.payload;
                state.bags = state.bags.map(bag => 
                    bag.id === action.payload.id ? action.payload : bag
                );
            })
            .addCase(editBagById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            });
    }
});

export const SliceReducer = SliceBag.reducer;
export const SliceAction = SliceBag.actions;
