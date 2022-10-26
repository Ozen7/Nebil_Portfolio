import './App.css';
import HelloScreen from './mods/HelloScreen';
function App() {


// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
  return (
    <div className="App">
      <header className="App-header">
        <HelloScreen/>
      </header>
    </div>
  );
}

export default App;
