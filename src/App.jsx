import React, { useState } from "react";

const games = ["Cricket", "Football", "Hockey"];
const days = ["Weekends", "Weekdays"];

const App = () => {
  const [game,setGame] = useState(null)
  const [day,setDay] = useState(null)
  // console.log(game)

  const gameChange = (e) =>{
    setGame(e.target.value)
  }
  return (
    <div>
      <h1>React Coding</h1>
      <h2>Select Games</h2>
      {games.map((game) => (
        <div key={Math.random()} className="flex items-center gap-2">
          <input className="text-black" type="radio" value={game} onChange={gameChange} name="games" id={game} />
          <label htmlFor={game}>{game}</label>
        </div>
      ))}
      <p>Select Days</p>
      {days.map((day) => (
        <div key={Math.random()} className="flex items-center gap-2">
          <input className="text-black" type="radio" value={day} onChange={(e)=>setDay(e.target.value)} name="days" id={day} />
          <label htmlFor={day}>{day}</label>
        </div>
      ))}

        <p>I will play {game ?? "Nothing"} on {day ?? "Holiday"}</p>
    </div>
  );
};

export default App;
