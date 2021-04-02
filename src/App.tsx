import React from 'react';
import './App.css';
import CharactersContainer from './components/CharactersContainer/CharactersContainer';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
          <CharactersContainer />
      </div>
    </Provider>
  );
}

export default App;
