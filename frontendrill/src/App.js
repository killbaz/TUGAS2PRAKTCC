import {BrowserRouter, Routes, Route} from "react-router-dom"
import UserList from "./component/UserList";
import AddUser from "./component/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
