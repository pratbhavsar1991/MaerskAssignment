import { useState } from "react";
import { LoginComponent } from "./components/LoginComponent";
import { StudentForm } from "./components/StudentForm";
import { ReviewerView } from "./components/ReviewerView";
import { ApproverView } from "./components/ApproverView";
import { firebaseDB } from "./api/firebase_config";
import "./App.css";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userRole, setUserRole] = useState("student");
  const handleUserLogin = (data) => {
    setUserRole(data.role);
    setIsUserLogged(true);
  };
  return (
    <div className="App h-screen">
      <header>
        {isUserLogged && (
          <p
            className="text-right px-10 underline cursor-pointer"
            onClick={() => setIsUserLogged(false)}
          >
            Logout
          </p>
        )}
      </header>
      {!isUserLogged ? (
        <LoginComponent handleUserLogin={handleUserLogin} />
      ) : (
        <>
          {userRole === "student" && <StudentForm />}
          {userRole === "reviewer" && <ReviewerView />}
          {userRole === "approver" && <ApproverView />}
        </>
      )}
    </div>
  );
}

export default App;
