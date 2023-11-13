import { StatusState } from '@/utils/types/StatusState';
import { createSlice } from '@reduxjs/toolkit';

const initialState: StatusState = {
  isSelected: false,
  isDeleted: false,
  isSuccessful: false,
};

export const formStatus = createSlice({
  name: 'form-status',
  initialState,
  reducers: {
    setIsSelected: (state, action) => {
      return (state = { ...state, isSelected: action.payload });
    },
    setIsDeleted: (state, action) => {
      return (state = { ...state, isDeleted: action.payload });
    },
    setIsSuccessful: (state, action) => {
      return (state = { ...state, isSuccessful: action.payload });
    },
  },
});

export const { setIsSelected, setIsDeleted, setIsSuccessful } =
  formStatus.actions;

export default formStatus.reducer;
