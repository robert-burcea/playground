import './App.css';
import Calendar from './Calendar'
import { createPopper } from '@popperjs/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar />
      </header>
    </div>
  );
}

export default App;
