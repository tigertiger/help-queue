import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';
import Moment from 'moment';

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

  const ticketData = {
    names: 'Raingourd and Skibbits',
    location: 'The garden',
    issue: 'The lawn is flooded and full of fish',
    timeOpen: 0,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer',
  () => {
    expect(ticketListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add a ticket to the ticket list that includes Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: c.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });

  test('Should delete a ticket', () => {
    action = {
      type: c.DELETE_TICKET,
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Big Blort & Sclibb',
      location: 'Science Fair',
      Issue: 'Posterboard got rained on',
      id: 2}
    });
  });

  test('Should add a formatted wait time to ticket entry', () => {
    const {names, location, issue, timeOpen, id} = ticketData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
  expect(ticketListReducer({ [id] : ticketData }, action)).toEqual({
    [id] : {
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: '4 minutes'
    }
  });
  });

});