import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataobj: {
        name: "test",
        bio: "test",
      },
    };

    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Mounted");
    const data = await fetch("https://api.github.com/users/chsaikumar445");
    const json = await data.json();
    this.setState({
      dataobj: json,
    });
    console.log("child component mounted");
  }

  componentDidUpdate() {
    console.log("child component updated");
  }

  componentWillUnmount() {
    console.log("child component unmounted");
  }

  render() {
    console.log("child render ");
    const { login, bio, avatar_url } = this.state.dataobj;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="test" />
        <h2>Name:{login}</h2>
        <h2>Bio:{bio}</h2>
        <h2>Contact:+13145742137</h2>
      </div>
    );
  }
}

export default UserClass;

/*
*****Mounted(Rendering component for first time)*******
    constructor
    render
    component did mount
*****Updated(ReRendering component)***********
     render
     component did update
*****Un Mounted(when opening another component the current component is unmounted)
      component did unmount
*/
