//import logo from './logo.svg';
import './App.css';

import './components/menu/menu.css';
import './components/header/header.css';
import './components/home/home.css';
import RegisterView from './views/registerview/registerview';
import EmployeesView from './views/employeesview/employeesview';
import HomeView from './views/homeview/homeview';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginView from './views/loginview/loginview';
import RolesView from './views/rolview/rolview';
import ApplicationView from './views/applicationview/applicationview';
import NewsView from './views/newsview/newsview';
import UserRoles from './views/userRolview/userRolview';
import AppRoles from './views/appRolview/appRolview';
import Menu from './components/menu/menu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registerview" element={<RegisterView />} />
        <Route path="/employeesview" element={<EmployeesView />} />
        <Route path="/loginview" element={<LoginView />} />
        <Route path="/rolesview" element={<RolesView />} />
        <Route path="/applicationsview" element={<ApplicationView />} />
        <Route path="/newsview" element={<NewsView />} />
        <Route path="/userRolview" element={<UserRoles />} />
        <Route path="/appRolview" element={<AppRoles />} />
        <Route path='/menu' element={<Menu />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App;
