import Home from './Component/Home'
import ComponentClass from './Component/ComponentClass'
import ComponentFunctional from './Component/ComponentFunctional'
//import './App.css'

import Role from './Component/Role'
import PropsState from './Component/PropsState'
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
           <Role/> 
          <PropsState/>
        </div>
        </div>
    </>
  )
}

export default App
