import React ,{ Component } from 'react';
import { useSelector , useDispatch } from 'react-redux'; //to access counter
import { incrememnt } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();//mandatory to write to dispactch actions
 
  return (
    <div className='container min-vh-100 w-100 d-flex '>
    <div className="row align-items-center w-50 justify-content-center"> 
      <div className="col"> 

          <button type="button" class="btn btn-primary d-flex align-items-center" size="md"  onClick={() => dispatch(incrememnt())}>Click Here</button>
      </div>

      <div className='bg-info d-flex align-items-center justify-content-center text-black rounded'
      style={{ width: "200px", height: "200px" }}> 
       
      <h1>{counter}</h1>
      </div>

           
    </div>
    </div>
  );
}

export default App;
