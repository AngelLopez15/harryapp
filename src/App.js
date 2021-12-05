import axios from 'axios';
import { useEffect, useState } from 'react';
import '../src/assets/styles/global.scss'
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {

  const [characteres, setCharacteres] = useState([])

  useEffect(() => {

    let config = {
      method: 'get',
      url: 'http://localhost:5000/hp-characters',
      headers: { }
    };
    axios(config)
    .then(function (response) {
      console.log(response.data)
      setCharacteres(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, [])

  return (
    <>
      <Navbar />
      <Header />
      <div className="select-buttons">
        <Button 
          text = { "ESTUDIANTES" }
          filter = { "hp-students" }
          setCharacteres = { setCharacteres }
          />
        <Button 
          text = { "STAFF" }
          filter = { "hp-staff" }
          setCharacteres = { setCharacteres }
        />
      </div>
      <section className="home">
        {
          characteres.map((item)=> (
            <Card
              key= {item.name} 
              name = {item.name}
              alive = {item.alive}
              dateOfBirth = {item.dateOfBirth}
              gender = {item.gender}
              eyeColour = {item.eyeColour}
              hairColour = {item.hairColour}
              image = {item.image}
              hogwartsStudent = {item.hogwartsStudent}
              hogwartsStaff = {item.hogwartsStaff}
              house={item.house}
            />
          ))
        }
      </section>
      <Modal />
    </>
  );
}

export default App;
