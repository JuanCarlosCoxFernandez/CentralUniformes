//import logo from './logo.svg';
import './App.css';
//import Header from './components/header/header';
//import Login from './components/login/login';
//import Menu from './components/menu/menu';
import './components/menu/menu.css';
import './components/header/header.css';
import './components/home/home.css';
//import Employees from './components/employees/employees';
//import Register from './components/register/register';
import RegisterView from './views/registerview/registerview';
import EmployeesView from './views/employeesview/employeesview';
import Home from './components/home/home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginView from './views/loginview/loginview';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registerview" element={<RegisterView />} />
        <Route path="/employeesview" element={<EmployeesView />} />
        <Route path="/loginview" element={<LoginView />} />
        {/* <Route path="/home" element={<EmployeesView />} /> */}
        <Route path="/" element={<Home prop='<img src="/logo.png"/>' />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App;
