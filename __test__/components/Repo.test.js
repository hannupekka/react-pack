import React from 'react';
import renderer from 'react-test-renderer';
import Error from 'components/Error';

describe('Error', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Error message="Error!" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
