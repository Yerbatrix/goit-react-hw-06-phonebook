import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constants';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) || [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts,
      };
    case DELETE_CONTACT:
      const filteredContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem('contacts', JSON.stringify(filteredContacts));
      return {
        ...state,
        contacts: filteredContacts,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
