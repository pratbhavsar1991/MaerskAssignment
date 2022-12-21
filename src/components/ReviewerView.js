import React, { useEffect, useState } from "react";

export const ReviewerView = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    let stud = [
      { id:1, first_name: "abc",last_name:"Dev", age: 18, gender: "Male", marks: 60 },
      { id:2, first_name: "xyz",last_name:"Mittal", age: 18, gender: "Male", marks: 40 },
    ];
    setStudents(stud);
  };

  const updateStudentStatus = (student) => {
    
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Marks</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return <tr>
              <td className="border px-4 py-2">{`${student.first_name} ${student.last_name}`}</td>
              <td className="border px-4 py-2">{student.age}</td>
              <td className="border px-4 py-2">{student.gender}</td>
              <td className="border px-4 py-2">{student.marks}</td>
              <td className="border px-4 py-2">{student.marks < 50 ? "Rejected" : student.status}</td>
              {student.marks > 50 && !student.status &&
                <td className="px-4 py-2">
                    <ul>
                        <li className="float-left mx-2">Approve</li>
                        <li className="float-left mx-2">Reject</li>
                    </ul>
                </td>
              }
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
