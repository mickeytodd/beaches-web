import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeachDetails from './components/BeachDetails/BeachDetails';
import Home from './components/Home';
import BeachesByLocation from './components/BeachesByLocation/BeachesByLocation';

function App() {

  const data = [
    {
      id: 'b1',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
      title: 'Saud Beach',
      location: 'Pagudpud, Ilocos Norte, Philippines',
      amount: 94.12,
      type: "Pebble Beach"
    },
    {
      id: 'b2',
      image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      title: 'Elafonissi Beach',
      location: 'Crete, Greece',
      amount: 799.49,
      type: "Sandy Beach"
    },
    {
      id: 'b3',
      image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80',
      title: 'Nungwi Beach',
      location: 'Zanzibar',
      amount: 294.67,
      type: "Sandy Beach"
    },
    {
      id: 'b4',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Hanalei Bay',
      location: 'Kauaʻi island, Hawaii',
      amount: 450,
      type: "Rocky Beach"
    },
    {
      id: 'b5',
      image: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      title: 'Copacabana',
      location: 'Rio de Janeiro, Brazil',
      amount: 145.45,
      type: "Rocky Beach"
    },
    {
      id: 'b6',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Cape Le Grand National Par',
      location: 'Cape Le Grand Rd, Cape Le Grand WA 6450, Australia',
      amount: 500.25,
      type: "Sandy Beach"
    },
    {
      id: 'b7',
      image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
      title: 'Grayton Beach',
      location: 'Florida',
      amount: 79.89,
      type: "Sandy Beach"
    },
    {
      id: 'b8',
      image: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
      title: 'Sotavento Beach',
      location: 'Fuerteventura, Spain',
      amount: 450.50,
      type: "Pebble Beach"
    },
    {
      id: 'b9',
      image: 'https://images.unsplash.com/photo-1521170813716-0b3f42fcfb65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Cannon Beach',
      location: 'Oregon, United States',
      amount: 150,
      type: "Rocky Beach"
    },
    {
      id: 'b10',
      image: 'https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
      title: 'Le Morne',
      location: 'Mauritius Island',
      amount: 270.95,
      type: "Sandy Beach"
    },
    {
      id: 'b11',
      image: 'https://images.unsplash.com/photo-1502306921218-8613691ddc97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Falassarna Beach',
      location: 'Crete, Greece',
      amount: 799.49,
      type: "Pebble Beach"
    },
    {
      id: 'b12',
      image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Banana Beach',
      location: 'Vasilikou, Zakynthos, Greece',
      amount: 80.49,
      type: "Sandy Beach"
    },
    {
      id: 'b13',
      image: 'https://images.unsplash.com/photo-1694046966197-86883c0c8c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Balos Beach',
      location: 'Chania, Crete, Greece',
      amount: 146,
      type: "Rocky Beach"
    },
    {
      id: 'b14',
      image: 'https://images.unsplash.com/photo-1630398865075-67f3fa8fcddc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Navagio Beach',
      location: 'Zakynthos, Greece',
      amount: 296.70,
      type: "Sandy Beach"
    },
    {
      id: 'b15',
      image: 'https://images.unsplash.com/photo-1713299625928-84a2fdec34f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Houlakia Beach',
      location: 'Mykonos, Greece',
      amount: 261.70,
      type: "Pebble Beach"
    },
  ];


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path="/beach-details/:id" element={<BeachDetails data={data} />} />
          <Route path="/location/:location" element={<BeachesByLocation data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
