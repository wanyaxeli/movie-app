import React,{createContext} from 'react'
import './App.css';
import useCustomfetch from './components/customfetch/useCustomfetch';
import Links from './components/links/Links';
export const myContext = createContext('')
function App() {
const[data]=useCustomfetch('http://localhost:4000/movies')
  return (
    <myContext.Provider value={data} className="App">
      <Links/>
    </myContext.Provider>
  );
}

export default App;
