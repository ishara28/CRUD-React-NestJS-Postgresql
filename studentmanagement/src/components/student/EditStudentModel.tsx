import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
} from "@coreui/react";
import axios from "axios";
import React from "react";
import { BACKEND_URL } from "../../Constants";

interface Props {
  setVisible: any;
  visible: boolean;
  id: number;
  nameProp: string;
  emailProp: string;
  ageProp: number;
}

const EditStudentModel = ({
  setVisible,
  visible,
  id,
  nameProp,
  emailProp,
  ageProp,
}: Props) => {
  const [name, setName] = React.useState(nameProp);
  const [email, setEmail] = React.useState(emailProp);
  const [age, setAge] = React.useState(ageProp);
  const [isLoading, setisLoading] = React.useState(false);

  const updateStudent = async () => {
    setisLoading(true);
    let studentData: object = {
      name,
      age,
      email,
    };
    const result = await axios
      .put(BACKEND_URL + id, studentData)
      .then((res) => {
        setisLoading(false);
        console.log(res);
        if (res.status == 200) {
          setVisible(false);
          // setName("");
          // setEmail("");
          // setAge(0);
          console.log("Update Student Succesfull");
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        backdrop={"static"}
      >
        <CModalHeader>
          <CModalTitle>Edit Student Details</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            label="Name"
            placeholder="Name here..."
            aria-label="default input example"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <CFormInput
            type="email"
            id="exampleFormControlInput1"
            label="Email address"
            placeholder="name@example.com"
            // text="Must be 8-20 characters long."
            aria-describedby="exampleFormControlInputHelpInline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <CFormInput
            type="text"
            label="Age"
            placeholder="Age here..."
            aria-label="default input example"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={updateStudent} disabled={isLoading}>
            Update
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default EditStudentModel;
