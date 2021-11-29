import ticketListReducer from '../../reducers/ticket-list-reducer';

describe('ticketListReducer', () => {

  let action;
  const currentState = {
    1: {names: '3 Jerks',
    location: 'A Bog',
    Issue: 'Sacrificed 4th jerk to no affect',
    id: 1},
    2: {names: 'Big Blort & Sclibb',
    location: 'Science Fair',
    Issue: 'Posterboard got rained on',
    id: 2}
  };

  test('Should return default state if there is no action type passed into the reducer',
  () => {
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });

  test('Should add new ticket data to mainTicketList', () => {
    const { names, location, issue, id } = currentState;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Big Blort & Sclibb',
      location: 'Science Fair',
      Issue: 'Posterboard got rained on',
      id: 2}
    });
  });
});