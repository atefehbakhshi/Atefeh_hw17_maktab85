import Function from './components/Function'
import Class from './components/Class'

import './App.css'

function App() {

  return (
    <div className="app">
      <div className='item'>
        <p>I'm <strong>Functional</strong> component:</p>
        <Function />
      </div>
      <div className='item'>
        <p>I'm <strong>Class</strong> component:</p>
        <Class />
      </div>
    </div>
  )
}

export default App
