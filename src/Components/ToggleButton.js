import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

const ToggleButton = ({ children, btnText }) => {
  const [show, toggle] = useState(false);
  btnText = btnText.toLowerCase();
  return (
    <>
      <Button
        className="btn-primary"
        onClick={() => toggle(!show)}
        aria-controls={btnText}
        aria-expanded={show}
      >
        {btnText}
      </Button>
      <Fade in={show}>{children}</Fade>
    </>
  );
};
export default ToggleButton;
