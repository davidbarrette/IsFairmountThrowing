import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

//this is the test given by react when a react app is made, delete when
//more tests are made for this file
test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
