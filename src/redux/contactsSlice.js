import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: JSON.parse(localStorage.getItem('contacts')) || [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(state));
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
