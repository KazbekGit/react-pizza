import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryID: 0,
  sortType: {
    name: 'популярности (DESC)',
    sortProperty: '-rating'
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryID (state, action) {
      state.categoryID = action.payload
    },
    setSortType (state, action) {
      state.sortType = action.payload
    }
  }
})

export const {setCategoryID, setSortType} = filterSlice.actions
export default filterSlice.reducer
