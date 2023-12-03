import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import HomePage from './components/pages/HomePage';
import PingPage from './components/pages/PingPage';
import SignUpPage from './components/pages/SignUpPage';
import ProfilePage from './components/pages/ProfilePage';
import EditProfilePage from './components/pages/EditProfilePage';

import UserListProvider from './contexts/UserListContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <UserListProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><HomePage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
            <Route path="/pong" element={<Layout><PingPage sx={{ backgroundColor: "#eeeeee" }} /></Layout>}></Route>
            <Route path="/sign-up" element={<Layout><SignUpPage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
            <Route path="/profile" element={<Layout><ProfilePage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
            <Route path="/edit-profile" element={<Layout><EditProfilePage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
          </Routes>
        </Router>
      </UserListProvider>
    </div>
  );
}

export default App;
