import React from "react";
import Ticket from "./Ticket";

const mainTicketList = [
  {
    names: 'Strange cats who appeared at your door one night',
    location: 'SE Portland',
    issue: 'There is a mouse about who is not a real mouse.'
  },
  {
    names: 'A friend who means well',
    location: 'SE Portland',
    issue: 'It\'s best not to look too deeply into the concerns of cats.'
  },
  {
    names: 'The Doctors Rat & Opossum',
    location: 'SE Portland',
    issue: 'We have heard whisperings of a certain mouse...we would like to share information.'
  }
];

function TicketList(){
  return (
    <React.Fragment>
      <div className="container">
        <hr />
        {mainTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
        location = {ticket.location}
        issue={ticket.issue}
        key={index}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default TicketList;