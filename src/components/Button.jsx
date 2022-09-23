import React from "react";

const Button = ({ text, onClick }) => (
  <div className="form-group mx-sm-3 mb-2">
    <button type="submit" className="btn btn-dark" onClick={onClick}>
      {text}
    </button>
  </div>
);
