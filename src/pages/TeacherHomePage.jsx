// import React from "react";
import useFetchAssignments from "../components/Fetch/useFetchAssignments";
import useFetchHomework from "../components/Fetch/useFetchHomeWork";
import useFetchSections from "../components/Fetch/section";
import WelcomeSection from "../components/Fetch/Welcome";
import useFetchRecentMessages from "../components/Fetch/useFetchrecentMessages";
import Lottie from "lottie-react";
import animationData from "../assets/teacher.json";

// import Anouncment from "./anoucment page";
function TeacherHomePage() {
  const { assignments, loading: loadingAssignments } = useFetchAssignments();
  const { homework, loading: loadingHomework } = useFetchHomework();
  const { sections, loading: loadingSections } = useFetchSections();
  const { name, loading: loadingName } = WelcomeSection();
  const { messages, loading: loadingMessages } = useFetchRecentMessages();
  // const { announcement, loading: loadingAnoucment } = Anouncment();
  if (
    loadingAssignments ||
    loadingHomework ||
    loadingSections ||
    loadingName ||
    loadingMessages
    // loadingAnoucment
  )
    return <div>loading...</div>;
  return (
    <div className="w-full h-full bg-gray-100 text-gray-800 text-customText font-sans">
      <div className="container grid grid-rows-4-auto gap-5 p-5 mx-auto max-w-none">
        <div>{/* <Lottie animationData={animationData} /> */}</div>
        <nav className="nav"></nav>
        <div className="welcome-sec flex shadow-md border-b border-gray-300 bg-blue-800 rounded-lg">
          <div>
            <Lottie
              animationData={animationData}
              className="lottie w-[200px] h-[200px]"
            />
          </div>

          <div className="name p-5 rounded-lg text-white w-full h-50 text-lg">
            {name.map((name) => (
              <div key={name.user_id} className="namee">
                <p>
                  <b>
                    Welcome {name.first_name}-{name.last_name}!
                  </b>{" "}
                  <p>Ready to inspire brilliance today?</p>
                  <p>
                    you have number of students added to your domain.please
                    reach out to the teacher ig you want them to exclude
                  </p>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="cont flex gap-20">
          <div className="section bg-white rounded-lg shadow p-5 w-[270px] h-fit">
            <h2 className="sec-title text-2xl font-semibold text-blue-500 mb-4">
              Sections Taught
            </h2>
            {sections.length > 0 ? (
              <ul>
                {sections.map((section) => (
                  <li
                    key={section.section_id}
                    // className="card"
                    className="bg-gray-100 mb-2 p-4 rounded-md border-l-4 border-blue-800"
                  >
                    Class:{section.section}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No sections to display.</p>
            )}
          </div>
          <div className="assignment bg-white rounded-lg shadow p-5 w-[400px] h-fit">
            <h2 className="ass-title text-2xl font-semibold text-blue-500 mb-4">
              Assignmensts given
            </h2>
            {assignments.length > 0 ? (
              <ul>
                {assignments.map((assignment) => (
                  <li
                    key={assignment.id}
                    // className="card"
                    className="bg-gray-100 mb-2 p-4 rounded-md border-l-4 border-blue-800"
                  >
                    <strong>{assignment.title}</strong> -{" "}
                    {assignment.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No recent assignments found.</p>
            )}
          </div>
          <div className="homework bg-white rounded-lg shadow p-5 w-[400px] h-fit">
            <h2 className="hw-title text-2xl font-semibold text-blue-500 mb-4">
              Todays Homework
            </h2>
            {homework.length > 0 ? (
              <ul>
                {homework.map((hw) => (
                  <li
                    key={hw.homework_id}
                    // className="card"
                    className="bg-gray-100 mb-2 p-4 rounded-md border-l-4 border-blue-800"
                  >
                    <strong>{hw.title}</strong> - {hw.description}
                    <br />
                    Assigned Date: {hw.assigned_date}, Due Date: {hw.due_date}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No homework for today.</p>
            )}
          </div>
        </div>
        <div className="contt flex justify-around">
          {/* <div className="anoucment">
         
          <h1>Announcements</h1>
          {announcement.map((announcement) => (
            <div key={announcement.id}>
              <h2>{announcement.title}</h2>
             
              <p>{announcement.description}</p>
              <button>Read More</button>
            </div>
          ))}
        </div> */}
        </div>
        <div className="conttt flex gap-20">
          <div className="result bg-white rounded-lg shadow p-5 w-[270px] border-l-4 border-blue-800 h-fit">
            <h2 className="result-title text-2xl font-semibold   text-blue-500 mb-4">
              students result
            </h2>
            <button className="result-btn  bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">
              result
            </button>
          </div>
          <div className="message bg-white rounded-lg shadow p-5 w-[400px] h-fit border-l-4 border-blue-800 ">
            <h2 className="message-title text-2xl font-semibold  text-blue-500 mb-4">
              Recent Messages
            </h2>
            {messages.length > 0 ? (
              messages.map((message) => (
                <div key={message.message_id} className="rounded-md p-4 mb-1">
                  <p>{message.content}</p>
                  {/* <span>{new Date(message.timestamp).toLocaleString()}</span> */}
                </div>
              ))
            ) : (
              <p>No recent messages.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherHomePage;
