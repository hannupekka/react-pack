import React from 'react';
import renderer from 'react-test-renderer';
import { Index } from 'containers/Index';

describe('Index', () => {
  it('renders correctly without greeting', () => {
    const tree = renderer.create(
      <Index
        showGreeting={false}
        users={[]}
        dispatch={() => {}}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with greeting', () => {
    const tree = renderer.create(
      <Index
        showGreeting
        users={[]}
        dispatch={() => {}}
      />
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with users', () => {
    const tree = renderer.create(
      <Index
        showGreeting={false}
        users={[
          { email: 'foo.bar@example.com' },
          { email: 'bar.foo@example.com' },
        ]}
        dispatch={() => {}}
      />
    );

    expect(tree).toMatchSnapshot();
  });
});
