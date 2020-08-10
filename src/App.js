import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';

const App = () => {

  /* Empty array in useState means
     It will start with empty n when we fetch data
     from api its fills */
  const [items, setItems] = useState([]);

  /* Its set true as default and after we fetch n data fetches
      successfully then we set it to false */
  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('');

  /* to make the request it needs to go into useEffect 
      - Axios return promise */

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
