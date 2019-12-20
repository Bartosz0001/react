import shortid from 'shortid';

// selectors

export const getCardsForColumn = ({cards}, columnId) => cards.filter(
  (card) => card.columnId == columnId
);

export const searchCards = ({cards, columns, lists}, searchString) => cards.filter(
  (card) => new RegExp(searchString, 'i').test(card.title)
).map(card => {
  return {...card, listId: columns.find(column => column.id === card.columnId).listId, 
    columnTitle: columns.find(column => column.id === card.columnId).title,
    listTitle: lists.find(list => list.id === columns.find(column => column.id === card.columnId).listId).title};
});

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}