import React from 'react';
import { render } from '@testing-library/react';


test('renders learn react link', () => {
  const component = render(<div />);

  expect(component).toBeTruthy();
});