import logo from './logo.svg';
import './App.css';
import ListEmployees from './Components/ListEmployees';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';

function App() {
  return (
    <div>
      <BrowserRouter >
        
          <HeaderComponent />
          <div className="container">
            <switch>
              <Routes>
              <Route path="/" exact Component={ListEmployees}/>
              <Route path="/employees" Component={ListEmployees}/>
              <Route path="/employees/add" Component={AddEmployee}/>
              <Route path="/employees/update/:id" element={<UpdateEmployee />}/>
              </Routes>
              {/* <ListEmployees /> */}
             
            </switch>
          </div>
          <FooterComponent />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
