import { useState } from "react";
import "./ticket.css"
import { getTicket, sum } from "./helper";

export default function Lottery(){
    const[ticket, setTicket] = useState(getTicket(3))
    let isWinning = sum(ticket) ===13

    let Buyticket=()=>{
      setTicket(getTicket(3))

    }
    
    return (
      <div>
        <h1 id="lo">Lottery Game!</h1>
        <div className="ticket">
          <span>{ticket[0]}</span>
          <span>{ticket[1]}</span>
          <span>{ticket[2]}</span>
        </div>
        <h3>{isWinning && "Congrulation You won"}</h3>
        <button onClick={Buyticket}>Buy Tickets</button>
      </div>
    );
}