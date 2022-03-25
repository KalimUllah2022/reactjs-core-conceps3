
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComment></LoadComment>
    </div>
  );
}

function LoadComment() { 
  const [comments, setComments] = useState([]);
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))
  }, []);
  return (
    <div>
      <h2>{comments.length}</h2>
      {
        comments.map(comment => <Comment id={ comment.id } name={ comment.name } email={comment.email} body={ comment.body }></Comment>)
      }
    </div>
  )
}
function Comment(props) {
  return (
    <div>
      <h1>Id: { props.id }</h1>
      <h2>Name: { props.name }</h2>
      <h4>Email: {props.email}</h4>
      <em>Body: { props.body }</em>
    </div>
  )
}


function Counter() { 
  const [count, setCounter] = useState(10);
  const handleIncrease = () => setCounter ( count + 1 );
  const handleDecrease = () => setCounter ( count - 1 );
  // const increaseCounter = () => { 
  //   const newCount = (count + 1);
  //   setCounter(newCount);
  // }
  // const decreaseCounter = () => { 
  //   const newCount = (count - 1);
  //   setCounter(newCount);
  // }
  return (
    <div>
      <h1>Counter: { count }</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;
