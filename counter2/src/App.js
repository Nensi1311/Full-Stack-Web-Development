import CounterHooks from "./CounterHooks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props){
  return (<div>
    <Router>
    <Link to='/CounterHooks'>CounterHooks</Link>
    <Routes>
      <Route path='/CounterHooks' element={<CounterHooks />} />
    </Routes>
    </Router>
  </div>
  );
}

export default App;
