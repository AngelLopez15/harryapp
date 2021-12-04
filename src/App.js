import axios from 'axios';
import { useEffect, useState } from 'react';
import '../src/assets/styles/global.scss'
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';

function App() {

  // const [characteres, setCharacteres] = useState([])

  // useEffect(() => {
  //   var config = {
  //     method: 'get',
  //     url: 'http://localhost:5000/hp-characters',
  //     headers: { }
  //   };
  //   axios(config)
  //   .then(function (response) {
  //     setCharacteres(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
    
  // }, [])

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
        {/* {
          characteres.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))
        } */}
      </div>
      <section>
        <Card />
      </section>
    </>
  );
}

export default App;
