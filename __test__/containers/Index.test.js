import React from 'react';
import renderer from 'react-test-renderer';
import { Index } from 'containers/Index';

describe('Index', () => {
  it('renders correctly without greeting', () => {
    const tree = renderer.create(
      <Index
        showGreeting={false}
        toggleGreeting={() => {}}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with greeting', () => {
    const tree = renderer.create(
      <Index
        showGreeting
        toggleGreeting={() => {}}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
