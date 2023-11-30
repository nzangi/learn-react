import './App.css';
import NAMES from './components/data.json'
import { useState,useTransition } from 'react';
// import { PostForm } from './components/PostForm';
// import { Inline } from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.modules.css'
// import { Form } from './components/Forms';
// import { PostList } from './components/PostList';
// import { StylStyleSheeteSheet } from './components/StyleSheet';
// import { Greet } from './components/Greet';
// import { Message } from './components/Message';
// import { ClickHandler } from './components/ClickHandler';
// import { ParentComponent } from './components/ParentComponent';
// import { UserGreetings } from './components/UserGreetings';
// import { NameList } from './components/NameList';

function App() {
  const [query,setQuery] = useState('')
  const [inputValue,setInputValue] = useState('')
  const [isPending,startTransition] = useTransition()
  const changeHandler = (event) => {
    setInputValue(event.target.value)
    startTransition(() => setQuery(event.target.value))
  }

  const filteredNames = NAMES.filter((item)=>{
    return item.first_name.includes(query) || item.last_name.includes(query)

  })

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
      {/* <ParentComponent/> */}
      {/* <UserGreetings/> */}
      {/* <NameList/> */}
      {/* <StyleSheet/> */}
      {/* <StylStyleSheeteSheet/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form/> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}

      <input type='text' value={inputValue} onChange={changeHandler}/>
      {isPending && <p>Updating list...</p>}
      {
        filteredNames.map((item) =>(
          <p key={item.id}>
            {item.first_name} {item.last_name}</p>

        ))
      }
      
    </div>
  );
}

export default App;
