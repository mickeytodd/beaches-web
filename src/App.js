import React, { useState } from 'react';
import Header from './components/Header';
import RatedBeaches from './components/RatedBeaches/RatedBeaches';


function App() {

  const data = [
    {
      id: 'b1',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
      title: 'Lorem ipsum',
      amount: 94.12
    },
    {
      id: 'b2',
      image: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      title: 'Lorem ipsum',
      amount: 799.49
    },
    {
      id: 'b3',
      image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1196&q=80',
      title: 'Lorem ipsum',
      amount: 294.67
    },
    {
      id: 'b4',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Lorem ipsum',
      amount: 450
    },
  ];




  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

    console.log('Search query:', query);
  };



  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <RatedBeaches data={data} />

    </div>
  );
}

export default App;
