// SurveyField contains logic to render a single
// label and text input
import React from 'react';

// eslint-disable-next-line
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
