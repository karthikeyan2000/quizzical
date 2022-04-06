import './App.css';
import Start from "./Start";
import Trivia from "./Trivia";
import Result from "./Result";

function App() {
  return (
    <div className="App">
      <Start />
      <Trivia />
      <Result />
    </div>
  );
}

export default App;

// Manifest.json icons format
//    {
//      "src": "favicon.ico",
//      "sizes": "64x64 32x32 24x24 16x16",
//      "type": "image/x-icon"
//    },
//    {
//      "src": "logo192.png",
//      "type": "image/png",
//      "sizes": "192x192"
//    },
//    {
//      "src": "logo512.png",
//      "type": "image/png",
//      "sizes": "512x512"
//    }