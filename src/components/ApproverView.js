import React, { useEffect, useState } from "react";
import {
  collection,
  setDoc,
  getDocs,
  getFirestore,
  doc,
} from "firebase/firestore";

export const ApproverView = () => {
  const [students, setStudents] = useState([]);
  const db = getFirestore();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getDocs(collection(db, "students")).then((docs) => {
      let students = [];
      docs.forEach((doc) => {
        students.push({ ...doc.data(), id: doc.id });
      });
      setStudents(students || []);
    });
  };

  const updateStudentStatus = (student, status) => {
    setDoc(
      doc(db, "students", student.id),
      {
        status,
      },
      { merge: true }
    ).then((response) => {
      fetchData();
    });
  };
  return (
    <>
      <div className="h-screen flex justify-center  pt-10">
        <div>
          <h1 className="text-4xl py-4 text-left uppercase underline">
            Students
          </h1>
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
            <tbody className="overflow-y-auto max-h-96">
              {students.map((student) => {
                return (
                  <tr>
                    <td className="border px-4 py-2">{`${student.first_name} ${student.last_name}`}</td>
                    <td className="border px-4 py-2">{student.age}</td>
                    <td className="border px-4 py-2">{student.gender}</td>
                    <td className="border px-4 py-2">{student.marks}</td>
                    <td className="border px-4 py-2">{student.status}</td>
                    {student.status == "approved" && (
                      <td className="px-4 py-2">
                        <ul>
                          <button
                            onClick={(e) =>
                              updateStudentStatus(student, "selected")
                            }
                            className="float-left mx-2 border-2 px-2 rounded-md bg-green-500 border-green-500 text-white"
                          >
                            Select
                          </button>
                          <button
                            onClick={(e) =>
                              updateStudentStatus(student, "rejected")
                            }
                            className="float-left mx-2 border-2 px-2 rounded-md bg-red-500 text-white border-red-500"
                          >
                            Reject
                          </button>
                        </ul>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
