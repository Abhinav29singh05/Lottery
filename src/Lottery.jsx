import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let buyticket=()=>{
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyticket}>Buy new Ticket</button>  {/*can also make new file for button and pass butTicket function */}
            <h3>{isWinning && "Congratulations you won"}</h3>
        </div>
    )
}