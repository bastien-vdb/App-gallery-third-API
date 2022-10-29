import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import { useEffect, useState } from 'react';

function App() {

  const [result, setResult] = useState([]);
  useEffect(() => {
    const tab = [];
    for (let i = 0; i < 6; i++) {
      tab.push(1);
    }
    setResult(() => tab);
  }, [])


  return (
    <div className='h-screen'>
      <header className='h-1/4 bg-sky-50 flex flex-col gap-4 justify-evenly items-center'>
        <h1 className='text-4xl font-bold text-sky-700 text-center'>App GALLERY with a third API</h1>
        <div>
          <input type='file' />
          <button className='border-2 p-1 px-3 rounded bg-gray-300'>OK</button>
        </div>
      </header>
      <section className='h-full'>
        <div id='container' className='h-full flex justify-around flex-wrap p-6'>
          {result.map(e => <Box />)}
        </div>
      </section>
    </div>
  );
}

export default App;
