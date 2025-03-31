import Home from './Component/Home'
//import './App.css'
import UseStateComponent from "./Component/Hooks/useState";
function App() {

  return (
    <>
    <div className='container'>


      <Home />
      {/* <div className="container">
      <div className="box left">
         <h2>Class Component Stopwatch</h2>
          <ComponentClass name="ClassComponent"/>
      </div>
        
      <div className="box right">
          <h2>Functional Component Stopwatch</h2>
          <ComponentFunctional />
        </div>
        </div> */}
        <div>
           {/* <Role/> 
          <PropsState/> */}
          <UseStateComponent/>
        </div>
        </div>
    </>
  )
}

export default App
