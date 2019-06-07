import React, { useState } from 'react';
import { pagegrid, question, startinputs } from './quizStyles'
import Music from './Music'
import Notes from './Notes'


function App() {

  const [notes, addNote] = useState([])
  console.log(notes);

  return (
    <div style={pagegrid}>
      <div style={question}>
        <Music notes={notes}/>
      </div>
      <div style={startinputs}>
        <h2 style={{margin: 'auto'}}>Select a note to add it...</h2>
        <Notes onChange={(e) => {addNote([...notes, e.target.value])}}/>
      </div>
    </div>
  )
}

export default App;
