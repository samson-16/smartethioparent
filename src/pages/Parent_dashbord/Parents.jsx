import { useContext, useState, useEffect } from "react";
import RecentAssignments from './recentAssignment';
import Profile from "./Profile";
import { Gif } from "@mui/icons-material";
import parent from '../../assets/Parents.gif';
import { AuthContext } from "../../components/AuthContext";
import Message from "../../components/Message";
import Task from "../../components/Task";
import ExamCard from "../../components/ExamCard";
import FadeLoader from 'react-spinners/FadeLoader'
import ResponsiveAppBar from "../../components/NabBar";
export default function Parents() {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
   console.log(user)
  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50">
      <FadeLoader color="#36d7b7" />;
    </div>
      </>
    )
  }

  // Once loading is finished, display the user data
  const parentInfo = user.user;
  const recentMessage = user.recentMessages;
  const tasks = user.parentInfo.children_data[0].tasks;
  const exams = user.parentInfo.children_data[0].exams;
  const recentHomeworks = tasks.filter(task => task.type === 'homework');
  const recentAssignments = tasks.filter(task => task.type === 'assignment');
  const currentDate = new Date();
  const upcomingExams = exams.filter(exam => {
    const examDate = new Date(exam.exam_date);
    return examDate >= currentDate;
  });

  return (
    <>
    <ResponsiveAppBar />
    <div className="flex flex-wrap gap-4 md:h-screen ">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-solid rounded-lg shadow-md p-6  w-[100%] mx-auto">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex gap-8 justify-around items-center">
            <img src={parent} alt="profile" className="  9-80" />
            <div className=" h-full">
              <h1 className="font-bold mb-4 text-blue-800 md:text-4xl text-center mb-4">Welcome {parentInfo.first_name} {parentInfo.last_name}</h1>
              <label className="text-center text-2xl ">Join the Expedition: Partnering in Your Child's Learning Adventure !!!</label>
            </div>
          </div>
        )}
      </div>

      {/* Recent Messages card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(66%-16px)] mx-auto">
        <div className="flex justify-around ">
          <h1 className="text-xl font-bold mb-4 text-green-800">Recent Messages</h1>
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
        <div>
          {recentMessage && recentMessage.length > 0 ? (
            recentMessage.slice(0, 3).map((message, index) => (
              <Message key={index} message={message} />
            ))
          ) : (
            <p className="text-gray-500">No messages</p>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(33%-16px)]">
        <h1 className="text-xl font-bold mb-4 text-yellow-800">Upcoming Exams</h1>
        <div>
          {upcomingExams && upcomingExams.length > 0 ? (
            upcomingExams.slice(0, 3).map((exams, index) => (
              <ExamCard key={index} exam={exams} />
            ))
          ) : (
            <p className="text-gray-500">No Upcoming Exams</p>
          )}
        </div>
        <div className="text-right">
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
      </div>

      {/* Recent Assignments card */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(50%-16px)] mx-auto">
        <h1 className="text-xl font-bold mb-4 text-purple-800">Recent Tasks</h1>
        <div>
          {tasks && tasks.length > 0 ? (
            tasks.slice(0, 3).map((task, index) => (
              <Task key={index} task={task} />
            ))
          ) : (
            <p className="text-gray-500">No Tasks</p>
          )}
        </div>
        <div className="text-right">
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
      </div>

      {/* Results card */}
      <div className="bg-gradient-to-br from-red-200 to-red-300 border border-solid rounded-lg shadow-md p-6 w-full md:w-[calc(50%-16px)]">
        <h1 className="text-xl font-bold mb-4 text-red-800">Results</h1>
        {/* Add content for results here */}
        <div className="text-right">
          <a href="#" className="text-blue-500 hover:underline">See more</a>
        </div>
      </div>
    </div>
    </>
  );
}
