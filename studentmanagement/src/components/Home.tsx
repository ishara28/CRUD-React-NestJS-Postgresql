import { CCol, CRow } from "@coreui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <CRow>
          <CCol xs={3}>
            <SideBar />
          </CCol>
          <CCol xs={8}>
            <MainRoute/>
          </CCol>
        </CRow>
      </BrowserRouter>
    </div>
  );
};

export default Home;
