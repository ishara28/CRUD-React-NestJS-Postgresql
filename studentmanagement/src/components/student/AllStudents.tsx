import { CRow, CSpinner } from "@coreui/react";
import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../../Constants";
import StudentCard from "./StudentCard";

interface IStudent {
  id: number;
  name: string;
  email: string;
  age: number;
}

const defaultStudents: IStudent[] = [];

const AllStudents: React.FC = () => {
  const [students, setStudents]: [IStudent[], (students: IStudent[]) => void] =
    React.useState(defaultStudents);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getAllStudents();
  }, [students]);

  const getAllStudents = async () => {
    const result = await axios.get<IStudent[]>(BACKEND_URL).then((res) => {
      if (res.status == 200) {
        setStudents(res.data);
        setIsLoading(false);
      }
    });
  };

  const renderCards = () => {
    return students.map((student) => {
      return (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          email={student.email}
        />
      );
    });
  };
  return (
    <div style={{ marginTop: 10 }}>
      {isLoading && (
        <CSpinner
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        />
      )}
      {!isLoading && (
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
          {renderCards()}
        </CRow>
      )}
    </div>
  );
};

export default AllStudents;
