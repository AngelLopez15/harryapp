import axios from 'axios';
import { useEffect } from 'react';
import '../src/assets/styles/global.scss'
import Button from './components/Button';
import Header from './components/Header';

function App() {

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:5000/hp-characters',
      headers: { }
    };
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, [])

  return (
    <>
      <Header />
      <div className="select-buttons">
        <Button 
          text = { "ESTUDIANTES" } 
        />
        <Button 
          text = { "STAFF" } 
        />
      </div>
    </>
  );
}

export default App;
