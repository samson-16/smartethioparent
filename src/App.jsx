import "./App.css";
import LandingPage from './pages/LandingPage'
import ResponsiveAppBar from "./components/NabBar.jsx";
import { Routes, Route } from "react-router-dom";
import Result from "./pages/Teacher/Result/Result.jsx";
import ResultDetail from "./pages/Teacher/Result/ResultDetail/ResultDetail.jsx";
import ManageTeachers from "./pages/Admin/ManageTeacher/ManageTeachers.jsx";
import ManageData from "./pages/Admin/ManageGrade/ManageGrade";
import ManageStudents from "./pages/Admin/ManageStudent/ManageStudents.jsx";

function App() {
  return (
    <>
      <ResponsiveAppBar />
     
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/Result" element={<Result/>} />
        <Route path="/:Id" element={<ResultDetail/>} />
        <Route path="/GradeData" element={<ManageData />} />
        <Route path="/StudentData" element={<ManageStudents />} />
        <Route path="/TeacherData" element={<ManageTeachers />} />
        </Routes>
    </>
  );
}

export default App;
