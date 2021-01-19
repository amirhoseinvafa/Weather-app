import React, { useState } from "react";
import { Alert } from "reactstrap";

const AlertApp = ({
  content,
  color = "primary",
  className = "fixed-bottom",
}) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <div className={className}>
      <Alert isOpen={visible} toggle={onDismiss} color={color}>
        {content}
      </Alert>
    </div>
  );
};

export default AlertApp;
