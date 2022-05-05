import {
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
  CCardText,
  CCardFooter,
  CSpinner,
} from "@coreui/react";
import React from "react";
import { cilList, cilShieldAlt } from "@coreui/icons";
import AddStudentModal from "./AddStudentModal";
import axios from "axios";
import { BACKEND_URL } from "../../Constants";
import EditStudentModel from "./EditStudentModel";

interface Props {
  id: number;
  name: string;
  email: string;
  age: number;
}

const StudentCard = ({ id, name, email, age }: Props) => {
  const [visible, setVisible] = React.useState(false);

  const [isDeleting, setIsDeleting] = React.useState(false);

  const deleteStudent = (id: number) => {
    setIsDeleting(true);
    axios.delete(BACKEND_URL + id).then((res) => {
      console.log(res);
      if (res.status == 200) {
        setIsDeleting(false);
      }
    });
  };

  return (
    <div>
      {isDeleting && (
        <CSpinner
          style={{
            position: "relative",
            left: "50%",
            top: "50%",
          }}
        />
      )}
      {!isDeleting && (
        <CCard style={{ width: "18rem" }} color={"dark"} textColor={"light"}>
          {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}

          <CCardBody>
            <CCardTitle>Name : {name}</CCardTitle>
            <CCardText> Age : {age}</CCardText>
            <CCardText>Email : {email}</CCardText>
            <CCardFooter>
              <CButton color="primary" onClick={() => setVisible(true)}>
                Edit
              </CButton>
              <CButton
                color="danger"
                style={{ marginLeft: 5 }}
                onClick={() => deleteStudent(id)}
              >
                Delete
              </CButton>
            </CCardFooter>
          </CCardBody>
        </CCard>
      )}
      <EditStudentModel
        visible={visible}
        setVisible={setVisible}
        id={id}
        nameProp={name}
        emailProp={email}
        ageProp={age}
      />
    </div>
  );
};

export default StudentCard;
