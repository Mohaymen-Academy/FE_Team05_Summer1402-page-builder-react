import {createSlice} from '@reduxjs/toolkit';

export type AsideSliceType = {
  header: string;
  editingComponentId: string | number;
  editingComponentType: 'btns' | 'txt' | string;
};
export const AsideSlice = createSlice({
  name: 'aside',
  initialState: {
    editingComponentId: '',
    editingComponentType: '',
    header: '',
  },
  reducers: {
    setEditingComponent: (state: AsideSliceType, action: {payload: {id: string | number; type: 'btns' | 'txt' | 'layout'}}) => {
      const {id, type} = action.payload;
      state.editingComponentId = id;
      state.editingComponentType = type;
    },
    setEditingComponentType: (state: AsideSliceType, action: {payload: {type: 'btns' | 'txt' | 'layout'}}) => {
      const {type} = action.payload;
      state.editingComponentType = type;
    },
  },
});

export default AsideSlice;
