import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import Contact from "./Contact";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About page</h1>
        <h1>
          <UserContext.Consumer>
            {(data) => <div>{data.loggedInuser}</div>}
          </UserContext.Consumer>
        </h1>
        <UserClass name={"Sai  (class)"} location={"vijayawada,india"} />
      </div>
    );
  }
}

export default About;
