import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavTitle,
  CNavItem,
  CBadge,
  CSidebarToggler,
  CNavGroup,
} from "@coreui/react";
import React, { useState } from "react";
import CIcon from "@coreui/icons-react";
import {
  cibAddthis,
  cilSpeedometer,
  cilShieldAlt,
  cilPuzzle,
  cilPeople,
} from "@coreui/icons";
import AddStudentModal from "./student/AddStudentModal";

const SideBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <CSidebar style={{ height: "100vh" }}>
        <CSidebarBrand>Student Management System</CSidebarBrand>
        <CSidebarNav>
          <CNavTitle>Admin Functions</CNavTitle>
          <CNavItem href="/">
            <CIcon customClassName="nav-icon" icon={cilPeople} />
            All Students
          </CNavItem>
          <CNavItem href="#" onClick={() => setVisible(true)}>
            <CIcon customClassName="nav-icon" icon={cibAddthis} />
            Add Student
          </CNavItem>

          {/* <CNavGroup toggler="Nav dropdown">
            <CNavItem href="#">
            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
            item
            </CNavItem>
            <CNavItem href="#">
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
              item
              </CNavItem>
            </CNavGroup> */}
        </CSidebarNav>
        {/* <CSidebarToggler  /> */}
      </CSidebar>

      <AddStudentModal setVisible={setVisible} visible={visible} />
    </div>
  );
};

export default SideBar;
