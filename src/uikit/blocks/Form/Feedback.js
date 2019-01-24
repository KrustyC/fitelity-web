import React from 'react';
import styled from 'styled-components';

import { ErrorMessage } from 'formik';

const StyledFeedback = styled.span`
  color: red;
  margin-top: -5px;
  font-size: 10px;
`;

const Feedback = props => (
  <ErrorMessage {...props}>
    {msg => <StyledFeedback>{msg}</StyledFeedback>}
  </ErrorMessage>
);

export default Feedback;
