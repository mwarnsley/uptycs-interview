import { useEffect } from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const [loading, errors, data] = useFetch('http://localhost:3001/posts');
  console.log('THE DATA: ', data);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
