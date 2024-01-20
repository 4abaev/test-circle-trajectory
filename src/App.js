import './App.css';
import FPSCounter from './FPSCounter.js';
import Field from './Field.js'

function App() {
  return (
    <div className="App">
      <Field speed={20} />
      <FPSCounter />
    </div>
  );
}

export default App;
