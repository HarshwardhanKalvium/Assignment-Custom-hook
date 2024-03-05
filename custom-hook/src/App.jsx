import { useState, useEffect } from 'react';
import './App.css';

function useStorage(key) {
  const initialValue = localStorage.getItem(key) || sessionStorage.getItem(key) || '';
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [text, setText] = useStorage('text');

  return (
  <>
    <input className='input-box' type="text" value={text} onChange={e => setText(e.target.value)} />
  </>
    
  );
}

export default App;