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
}

const AddStudentModal = ({ setVisible, visible }: Props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [isLoading, setisLoading] = React.useState(false);

  const addStudentSubmit = async () => {
    setisLoading(true);
    let studentData: object = {
      name,
      age,
      email,
    };
    const result = await axios
      .post(BACKEND_URL, studentData)
      .then((res) => {
        setisLoading(false);
        console.log(res);
        if (res.status == 201) {
          setVisible(false);
          setName("");
          setEmail("");
          setAge("");
          console.log("Add Student Succesfull");
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
          <CModalTitle>Add Student</CModalTitle>
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
            onChange={(e) => setAge(e.target.value)}
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>

          <CButton
            color="primary"
            onClick={addStudentSubmit}
            disabled={isLoading}
          >
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default AddStudentModal;
