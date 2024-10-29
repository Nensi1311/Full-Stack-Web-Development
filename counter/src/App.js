import SimpleCounter from "./SimpleCounter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props){
  return (<div>
    <Router>
    <Link to='/SimpleCounter'>SimpleCounter</Link>
    <Routes>
      <Route path='/SimpleCounter' element={<SimpleCounter />} />
    </Routes>
    </Router>
  </div>
  );
}

export default App;
