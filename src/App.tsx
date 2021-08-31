import React ,{useState , useEffect,Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import LightSaberLoader from './components/lightSaberLoader/lightsaber';

const CharactersList = React.lazy(async() => {
  await new Promise(resolve => setTimeout(resolve, 5000));
    return import('./components/starwarsGallery/characterLists')
  } )

function App() {  
 
  return (
    <div className="App">
      <Suspense fallback={<LightSaberLoader/>}>
        <CharactersList/>
      </Suspense>
    </div>
  );
}

export default App;
