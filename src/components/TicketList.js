import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

// const mainTicketList = [
//   {
//     names: 'Strange cats who appeared at your door one night',
//     location: 'SE Portland',
//     issue: 'There is a mouse about who is not a real mouse.'
//   },
//   {
//     names: 'A friend who means well',
//     location: 'SE Portland',
//     issue: 'It\'s best not to look too deeply into the concerns of cats.'
//   },
//   {
//     names: 'The Doctors Rat & Opossum',
//     location: 'SE Portland',
//     issue: 'We have heard whisperings of a certain mouse...we would like to share information.'
//   }
// ];

function TicketList(props) {
  useFirestoreConnect([
    { collection: 'tickets' }
  ]);

  const tickets = useSelector(state => state.firestore.ordered.tickets);

  if (isLoaded(tickets)) {
    return (
      <React.Fragment>
        <div className="container">
          <hr />
          {tickets.map((ticket) =>
            <Ticket
              whenTicketClicked={props.onTicketSelection}
              names={ticket.names}
              location={ticket.location}
              issue={ticket.issue}
              formattedWaitTime={ticket.formattedWaitTime}
              id={ticket.id}
              key={ticket.id} />
          )}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <div className="container">
          <h3>Loading...</h3>
        </div>
      </>
    )
  }
}

TicketList.propTypes = {
  onTicketSelection: PropTypes.func
};

export default TicketList;