//import logo from './logo.svg';
import './App.css';
import PrivateRoute from './utils/PrivateRoute.js';
import './components/menu/menu.css';
import './components/header/header.css';
import './components/home/home.css';
import RegisterView from './views/registerview/registerview';
import EmployeesView from './views/employeesview/employeesview';
import HomeView from './views/homeview/homeview';
import { BrowserRouter, Route, Routes, useContext } from 'react-router-dom';
import { isLoggedIn, loadRoleUser } from './services/employeeService';
import { RolesContext } from './contexts/roles';
import LoginView from './views/loginview/loginview';
import RolesView from './views/rolview/rolview';
import ApplicationView from './views/applicationview/applicationview';
import NewsView from './views/newsview/newsview';
import UserRoles from './views/userRolview/userRolview';
import AppRoles from './views/appRolview/appRolview';
import Menu from './components/menu/menu';

function App() {

  // const logged = isLoggedIn();
  // const roles = useContext(RolesContext);

  // if (logged) {
  //   const User = localStorage.getItem('idUser');
  //   const UserRole = loadRoleUser(User);
  //   const role = UserRole.name;
  //   roles.role = role;
  // }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoute permittedRole='Admin' logged={logged} />}> */}
          <Route path="/employeesview" element={<EmployeesView />} />
          <Route path="/rolesview" element={<RolesView />} />
          <Route path="/applicationsview" element={<ApplicationView />} />
          <Route path="/newsview" element={<NewsView />} />
          <Route path="/userRolview" element={<UserRoles />} />
          <Route path="/appRolview" element={<AppRoles />} />
          <Route path='/menu' element={<Menu />} />
        {/* </Route> */}

        <Route path="/loginview" element={<LoginView />} />
        <Route path="/registerview" element={<RegisterView />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App;
