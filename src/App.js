import './App.css';
import './Style.css'
import Sidepanel from './Componets/Sidepanel'
import Leftpanel from './Componets/Leftpanel' 
import Middlepanel from './Componets/Middlepanel'
import Rightpanel from './Componets/Rightpanel'
import Navpanel from './Componets/Navpanel'
import {useState} from 'react';


function App() { 
  const [tid, setId] = useState([])

  const changeId = (tid) => {
        setId(tid)
  }
  console.log(tid)

  return (
    <div className="container-fluid m-0 p-0">
      <div class="toppane">
      <Navpanel/>
       </div>
       <div class="leftpanefirst">
      <Sidepanel />
       </div>
      <div class="leftpane">
        <Leftpanel handleId={(tid) =>{
        changeId(tid)
      }}/>
        </div>
        <div class="middlepane">
        <Middlepanel id={tid}/>
        </div>
        <div class="rightpane">
        <Rightpanel />
        </div>
       
        
        
       
       
</div>
    
  
  );
}

export default App;
