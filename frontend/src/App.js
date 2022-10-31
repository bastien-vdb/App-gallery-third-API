import './App.css';
import Box from './components/Box';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [pictures, setPictures] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [refresh, setRefresh] = useState(false);

  const fileUpload = useRef();

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      const expression = searchField;
      fetch(`http://localhost:3002/${expression}`)
        .then(res => {
          res.json()
            .then(res => {
              const tab = [];
              (res.resources).forEach(e => {
                tab.push({ url: e.url, id: e.public_id });
              })
              setPictures(() => tab);
            })
            .catch(err => console.log(err.message));
        })
        .catch(err => {
          console.log(err.message);
        })
    }
  }

  const getImg = () => {

    fetch('http://localhost:3002/')
      .then(res => {
        res.json().then(res => {
          const tab = [];
          (res.resources).forEach(e => {
            tab.push({ url: e.url, id: e.public_id });
          })
          setPictures(() => tab)
        })
      })
  }

  const handleUpload = () => {
    const uploadedFile = fileUpload.current.files[0];
    const uploadForm = new FormData();
    uploadForm.append('image', uploadedFile);
    console.log(uploadedFile);
    fetch('http://localhost:3002/upload/',{ 
      method:'POST',
      body:uploadForm
    })
      .then(res => {
        setRefresh(true);
        res.json()
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err.message);
          })
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  useEffect(() => {
    getImg();
    setRefresh(() => false)
  }, [refresh])


  return (
    <div className='h-screen'>
      <header className='h-1/4 bg-sky-50 flex flex-col gap-4 justify-evenly items-center'>
        <h1 className='text-4xl font-bold text-sky-700 text-center'>CloudApp with third API</h1>
        <div>
          <input ref={fileUpload} type='file' />
          <button className='border-2 p-1 px-3 rounded bg-gray-300' onClick={handleUpload}>OK</button>
          <input className='ml-32 text-center p-1 text-2xl rounded-xl' type="text" placeholder="Search" onKeyDown={(e) => handleSearch(e)} onChange={(e) => setSearchField(e.target.value)} />
        </div>

      </header>
      <section className='h-full'>
        <div id='container' className='h-full flex justify-around flex-wrap p-6'>
          {pictures.map(e => <Box url={e.url} id={e.id} frencher={setRefresh} />)}
        </div>
      </section>
    </div>
  );
}

export default App;
