import React, { useState } from 'react';
import Header from './components/Header';


function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Implement your search logic here
    console.log('Search query:', query);
  };



  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      {/* Rest of your app */}
    </div>
  );
}

export default App;
