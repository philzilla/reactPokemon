import './App.css';
//import { Fragment } from 'react'
import {Map} from '../componants/Map'
import Layout from '../componants/Layouts/Layout'


function App() {
  return (
    <Layout
    content={
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Pokémon Go !</h1>
              <Map />
            </div>
          </div>
        </div>
        <p>footer</p>
      </>
    }
    />
      

    
  );
}

export default App;
