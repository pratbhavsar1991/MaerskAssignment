import { useState } from "react";
import { LoginComponent } from "./components/LoginComponent";
import { StudentForm } from "./components/StudentForm";
import { ReviewerView } from "./components/ReviewerView";
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
      {console.log(userRole)}
      {!isUserLogged ? (
        <LoginComponent handleUserLogin={handleUserLogin} />
      ) : (
        <>
          {userRole == "student" && <StudentForm />}
          {userRole == "reviewer" && <ReviewerView />}
          {userRole == "approver" && <ReviewerView />}
        </>
      )}
    </div>
  );
}

export default App;
