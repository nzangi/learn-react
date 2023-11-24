import './App.css';
import { Greet } from './components/Greet';
// import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Nzangi' heroName='Batman'/>
      <Greet name='Muoki' heroName='Sir Sir'>
        <button>Action Required</button>
      </Greet>
      <Greet name='Mueni' heroName='Bat Woman'>
        <p>This the children PROPS</p>
      </Greet> */}

      {/* <Message/> */}
      {/* <ClickHandler/> */}
      <ParentComponent/>
      
    </div>
  );
}

export default App;
