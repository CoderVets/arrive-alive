import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// I've got a love bunch of coconuts.gargear
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
