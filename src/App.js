import './App.css';
import Start from "./Start";
import Trivia from "./Trivia";
import Result from "./Result";
import {useState} from "react";

function App() {
    const [nav, setNav] = useState(1);
    const [questions, setQuestions] = useState([])

    function handleStartClick() {
        setNav(2);
    }

    function handleTriviaClick(e, q) {
        setQuestions(q)
        setNav(3);
    }

    function getNav() {
        if(nav === 1) {
            return <Start handleStartClick={handleStartClick}/>;
        } else if(nav === 2) {
            return <Trivia handleTriviaClick={handleTriviaClick}/>;
        } else {
            return <Result questions={questions}/>;
        }
    }

  return (
    <div className="App">
        <div className="blob-top" />
        <div className="blob-bottom" />
        {getNav()}
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