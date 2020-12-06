// Third-party imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Global imports

// Local imports
import "./Join.css";

////////////////////////////////////////////////////////////////////////////////

const Join = () => {
  // Hooks
  const [name, setName] = useState("");

  const onHandleChange = (e) => {
    setName(e.target.value);
  };

  // Props
  const inputProps = {
    placeholder: "Name",
    type: "text",
    onChange: onHandleChange,
  };

  const linkProps = {
    onClick: (e) => (!name ? e.preventDefault() : null),
    to: `/chat?name=${name}`,
  };
  return (
    <div className="join-container">
      <div className="inner-container">
        <h1>Join</h1>
        <div className="form-join">
          <input {...inputProps} />
          <Link {...linkProps}>
            <button type="submit">Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
