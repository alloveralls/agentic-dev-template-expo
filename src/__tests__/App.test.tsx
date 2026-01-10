import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the greeting', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('greeting')).toBeTruthy();
  });
});
