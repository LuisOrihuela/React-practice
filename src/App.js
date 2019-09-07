import React, {userState} from 'react'
import Tweet from './Tweet';

function App () {
  // const [isRed, setRed] = userState(false);
  // const [count, setCount] = userState(0);
  return(
    <div className="app" >
      <Tweet name="Luis" message="Bla bla"/>
      <Tweet name="John" message="Hello"/>
      <Tweet name="Mary" message="This is a message"/>
      <Tweet name="Dave" message="Cool"/>

    </div>
  )
}

export default App;