// Alert.js
import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ message, onClose }) => {
  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      {message}
    </Alert>
  );
};

export default CustomAlert;
