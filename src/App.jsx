import "./App.css";
import LandingPage from "./pages/LandingPage";
import ResponsiveAppBar from "./components/NabBar.jsx";
import Login from "./pages/Login.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Result from "./pages/Teacher/Result/Result.jsx";
import ResultDetail from "./pages/Teacher/Result/ResultDetail/ResultDetail.jsx";
import ManageTeachers from "./pages/Admin/ManageTeacher/ManageTeachers.jsx";
import ManageData from "./pages/Admin/ManageGrade/ManageGrade";
import ManageStudents from "./pages/Admin/ManageStudent/ManageStudents.jsx";
import NotFound from "./components/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/Register.jsx";
import Teacher from "./components/Teacher.jsx";
import Admin from "./components/Admin.jsx";
import Resources from "./pages/Admin/Resource/Resources.jsx";
import StudentList from "./pages/Teacher/StudentList.jsx";
import { AuthProvider } from "./components/AuthContext.jsx";

import TeacherData from "./pages/Admin/TeacherData/TeacherData.jsx";
import Students from "./pages/Admin/Students/Students.jsx";
import Task from './Task.jsx'
import TeacherTask from "./pages/Teacher/TeacherTask.jsx";
import { useState } from "react";
import TeacherHomePage from "./pages/TeacherHomePage.jsx";
import Chat from "./pages/Teacher/Chat.jsx";
// import Footer from "./Footer";
import Parents from "./pages/Parent_dashbord/Parents.jsx";
import TasksPage from "./pages/Parent_dashbord/TasksPage.jsx";
import Assignments from "./pages/Parent_dashbord/Assignments.jsx";
import AllMessages from "./pages/Parent_dashbord/AllMessages.jsx";
import Profile from "./pages/Parent_dashbord/Profile.jsx";
import TeacherProfile from "./pages/Teacher/TeacherProfile.jsx";


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {

  const [tasks, setTasks] = useState([]);
  const filter = "All";
  

  return (
    <>
    <AuthProvider>
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
        path="/parent/home"
        element={
          <ProtectedRoute>
            <Parents />
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
        <Route path="/Result" element={<Result />} />
        <Route path="/:Id" element={<ResultDetail />} />
        <Route path="/GradeData" element={<ManageData />} />
        <Route path="/StudentData" element={<ManageStudents />} />
        <Route path="/TeacherData" element={<ManageTeachers />} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/student/assignments" element={<Assignments/>} />
        <Route path="/student/homeworks" element={<TasksPage/>} />
        <Route path="/parent/messages" element={<AllMessages/>} />
        <Route path="/parent/profile" element={<Profile/>} />
        <Route path="/teacher/profile" element={<TeacherProfile/>} />
        {/* <Route path="/teacher/chat" element={<Chat/>} /> */}
        <Route path="/teacher/tasks" element={<TeacherTask/>} />
        <Route path="/teacher/student-list" element={<StudentList grade={2} section="B" />} />
        <Route path="/chat/:parentId" element={<Chat />} />




        <Route path="/" element={<Navigate to="/tasks" />} />
          <Route
            path="/tasks/*"
            element={<Task tasks={tasks} setTasks={setTasks} filter={filter} />}
          />
          <Route
            path="/teachers/*"
            element={<TeacherTask tasks={tasks} setTasks={setTasks} />}
          />
        <Route path="/students" element={<Students/>} />
        <Route path="/Teacherhomepage" element={<TeacherHomePage/>} />

        {/* <Route path="/Parents" element={<Parents />} /> */}
        </Routes>
        </AuthProvider>
    </>
  );
}

export default App;

