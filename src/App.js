import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeachDetails from './components/BeachDetails/BeachDetails';
import Home from './components/Home';



function App() {



  const data = [
    {
      id: 'b1',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
      title: 'Saud Beach',
      amount: 94.12
    },
    {
      id: 'b2',
      image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      title: 'Elafonissi Beach',
      amount: 799.49
    },
    {
      id: 'b3',
      image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80',
      title: 'Nungwi Beach',
      amount: 294.67
    },
    {
      id: 'b4',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Hanalei Bay',
      amount: 450
    },
    {
      id: 'b5',
      image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      title: 'Copacabana',
      amount: 145.45
    },
    {
      id: 'b6',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Cape Le Grand National Park',
      amount: 500.25
    },
    {
      id: 'b7',
      image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
      title: 'Grayton Beach',
      amount: 79.89
    },
    {
      id: 'b8',
      image: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
      title: 'Sotavento Beach',
      amount: 450.50
    },
    {
      id: 'b9',
      image: 'https://images.unsplash.com/photo-1521170813716-0b3f42fcfb65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Cannon Beach',
      amount: 150
    },
    {
      id: 'b10',
      image: 'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      title: 'Le Morne',
      amount: 270.95
    },
  ];




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path="/beach-details/:id" element={<BeachDetails data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
