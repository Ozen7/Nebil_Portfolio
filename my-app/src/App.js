import './App.css';
import HelloScreen from './mods/HelloScreen/HelloScreen';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import HomePage from './mods/HomePage/HomePage';
function App() {


// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path = "/" element = {<HelloScreen/>}/>
            <Route path = "/homepage" element = {<HomePage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
