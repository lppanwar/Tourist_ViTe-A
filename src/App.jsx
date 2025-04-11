import { useState } from 'react'
import data from './Data.jsx';
import './App.css';
import Tours from './Components/Tours.Jsx';


const App = () => {
 
 const [tours,setTours]= useState(data)
 function removeTour(id){
  const newTour= tours?.filter(tour=> tour.id !== id);
  setTours(newTour);
 }
 if (tours?.length ===0){
  return (
    <div className='refresh'>
      <h2> No tours Left</h2>
      <button className='btn-white' onClick={()=> setTours(data)}>
        Refresh 
      </button>

    </div>
  );
 }
  return (
<div className='App'>
<Tours tour={tours} removeTour={removeTour}/>
</div>
  )
};

export default App;
