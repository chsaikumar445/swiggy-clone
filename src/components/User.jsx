import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h2>count:{count}</h2>
      <h2>count2:{count2}</h2>
      <h2>Name:{props.Name}</h2>
      <h2>Location:Vijayawada,india</h2>
      <h2>Contact:+13145742137</h2>
    </div>
  );
};

export default User;
