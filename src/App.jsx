import './App.css'
import Calculate from './components/Calculate'

function App() {

  return (
    <>
      <h1 style={{ fontFamily: 'GilRoy'}}> 💲 Calculador de precio</h1>
      <div className="card">
        <Calculate/>
      </div>
    </>
  )
}

export default App
