import CounterLimit from "./CounterLimit";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props){
  return (<div>
    <Router>
    <Link to='/CounterLimit'>CounterLimit</Link>
    <Routes>
      <Route path='/CounterLimit' element={<CounterLimit />} />
    </Routes>
    </Router>
  </div>
  );
}

export default App;
