import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Resource from "./pages/resource/Resource.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Contact from "./pages/contact/Contact.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/resources" element={<List/>}></Route>
        <Route path="/resources/:categoria/:id" element={<Resource/>}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
const InputArea = (props) => {
  const handleChange = (e) => props.handleInputValue(e.target.value);

  return (
    <div className="column">
      <div className="col-body">
        <textarea
          id="editor"
          placeholder="Enter text here"
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

const DisplayArea = (props) => (
  <div className="column">
    <div className="col-body">
      <div id="preview">{props.inputValue}</div>
    </div>
  </div>
);

class App extends React.Component {
  state = {
    inputValue: "Initial Value",
  };

  handleInputValue = (inputValue) => this.setState({ inputValue });

  render() {
    return (
      <div id="wrapper" className="App">
        <DisplayArea inputValue={this.state.inputValue} />
        <InputArea handleInputValue={this.handleInputValue} />
      </div>
    );
  }
}

*/
