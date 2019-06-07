import React from 'react';
import { pagegrid, question } from './quizStyles'
import Music from './Music'


function App() {
  return (
    <div style={pagegrid}>
      <div style={question}>
        <Music />
      </div>
    </div>
  )
}

export default App;
