import './App.css';
import PersonOne from './components/personOne';
import PersonTwo from './components/personTwo';
import PersonThree from './components/personThree';

function App() {
  return (
    <div className="App">
     <h2>建立第一個 Function Component</h2>
     <PersonOne />
     <PersonTwo name="Mark" age="27"/>
     <PersonThree name="Mark" age="27"/>
    </div>
  );
}

export default App;
