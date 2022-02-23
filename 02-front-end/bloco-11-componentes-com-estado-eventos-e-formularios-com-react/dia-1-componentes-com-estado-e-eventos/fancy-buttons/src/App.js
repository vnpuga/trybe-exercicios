import React from 'react';
import './App.css';
import HandleClick from './HandleClick';
import HandleClickRefatored from './HandleClickRefatored';
import HandleClickRefatored2 from './HandleClickRefatored2';
import HandleClickRefatored3 from './HandleClickRefatored3';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <HandleClick />
        <HandleClickRefatored />
        <HandleClickRefatored2 />
        <HandleClickRefatored3 />
      </div>
    );
  }
}

export default App;
