import Home from './Component/Home'
import ComponentClass from './Component/ComponentClass'
import ComponentFunctional from './Component/ComponentFunctional'
import './App.css'


function App() {

  return (
    <>
      <Home />
      <div className="container">
      <div className="box left">
         <h2>Class Component Stopwatch</h2>
          <ComponentClass name="ClassComponent"/>
      </div>
        
      <div className="box right">
          <h2>Functional Component Stopwatch</h2>
          <ComponentFunctional />
        </div>
        </div>
    </>
  )
}

export default App
