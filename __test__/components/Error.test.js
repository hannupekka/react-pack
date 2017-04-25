import React from 'react';
import renderer from 'react-test-renderer';
import Repo from 'components/Repo';

describe('Error', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Repo
        name="repository name"
        url="https://github.com"
        user="repository owner"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
