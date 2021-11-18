import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  const ticketStyles = {
    className: 'card',
    width:'500px'
  }
  return (
    <React.Fragment>
      <div style={ticketStyles} onClick = {() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
      </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;