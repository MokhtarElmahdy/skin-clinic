import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
 
export default function FormComp() {
  return (
    <Tabs fill className="mb-3">
      <Tab eventKey="login" title="Login">
      <LogIn/>
      </Tab>
      <Tab eventKey="signup" title="Sign up">
      <SignUp/>
      </Tab>
    </Tabs>
  );
}