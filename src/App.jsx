import "./App.css";
import LandingPage from './pages/LandingPage'
import ResponsiveAppBar from "./components/NabBar.jsx";
import Login from './pages/Login.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import Result from "./pages/Teacher/Result/Result.jsx";
import ResultDetail from "./pages/Teacher/Result/ResultDetail/ResultDetail.jsx";
import ManageTeachers from "./pages/Admin/ManageTeacher/ManageTeachers.jsx";
import ManageData from "./pages/Admin/ManageGrade/ManageGrade";
import ManageStudents from "./pages/Admin/ManageStudent/ManageStudents.jsx";

import NotFound from './components/NotFound.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './components/Home.jsx';
import Register from './components/Register.jsx';
import Parent from './components/Parent.jsx';
import Teacher from './components/Teacher.jsx';
import Admin from './components/Admin.jsx';
import Parents from "./pages/Parent_dashbord/Parents.jsx";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  
  return (
    <>
      <ResponsiveAppBar />
     
      <Routes>

         <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/parent"
        element={
          <ProtectedRoute>
            <Parent />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher"
        element={
          <ProtectedRoute>
            <Teacher />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<RegisterAndLogout />} />
      <Route path="*" element={<NotFound />} />

        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/Result" element={<Result/>} />
        <Route path="/:Id" element={<ResultDetail/>} />
        <Route path="/GradeData" element={<ManageData />} />
        <Route path="/StudentData" element={<ManageStudents />} />
        <Route path="/TeacherData" element={<ManageTeachers />} />

        <Route path="/Parents" element={<Parents />} />
        </Routes>
    </>
  );
}

export default App;
