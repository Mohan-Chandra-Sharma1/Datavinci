import './App.css';
import AccumulationDoughnut from "./donut";
import Spline from "./spline";
import Column from "./group";
import OverView from "./overview";


function App() {
  return (
    <div className="App">
     <div className='home'>
      <div className='home1'>
  
        <div className='graph' >
        <AccumulationDoughnut />
        </div>

          <div className='spline'>
          <Spline />
         </div>

          <div className='group'>
          <Column />
          </div>
         </div>

         <div className='home2'>
         <OverView />
         </div>
      
    
      
      </div> 
    </div>
  );
}

export default App;
