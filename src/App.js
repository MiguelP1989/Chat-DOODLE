// Third-party imports
import { BrowserRouter as Router, Route } from "react-router-dom";

// Global imports
import Chat from "../src/components/Chat/Chat";
import Join from "../src/components/Join/Join";

// Local imports
import "./App.css";

////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
