import React, {useState} from 'react';

import './search-panel.css';

const SearchPanel = ( {onSearchChange} ) => {

  const [inpsrh, setInpsrh] = useState('');

  const SearchChange = (e) => {
      const srhValue = e.target.value;
      setInpsrh(srhValue);
      onSearchChange(srhValue);
  };

  return (
    <input type="text"
              className="form-control search-input"
              placeholder="Type to search"
              value = {inpsrh}
              onChange = {SearchChange} />
  );
};

export default SearchPanel;
