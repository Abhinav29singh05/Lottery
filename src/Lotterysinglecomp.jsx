import { useState } from "react";
import "./Lotterysinglecomp.css";
import { genTicket,sum } from "./helper";

export default function Lotterysinglecomp(){
    let [ticket,setticket]=useState(genTicket(3)); 
    let isWinning=sum(ticket)===15;

    let buyticket=()=>{
        setticket(genTicket(3));
    }
 return(
    <div>
        <h1>Lottery Game</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        <br />  
        <button onClick={buyticket}>Buy new Ticket</button>
        <h3>{isWinning && "Congratulations you won" }</h3>
    </div>
 )
}