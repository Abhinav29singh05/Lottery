import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'
import Movable from '../../my-app/src/Movable'

function App() {

  let winCondition=(ticket)=>{
      return sum(ticket)===15;
  }
  // let winCondition=(ticket)=>{
  //     return ticket.every((num)=>num===ticket[0]);
  // }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}></Lottery>
      
    </>
  )
}

export default App
