import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RocketList from '../components/Rockets';
import store from '../redux/store';

jest.mock('../components/Rockets');

describe('Group of tests for Rockets page', () => {
  it('renders rockets list correctly', () => {
    const list = renderer
      .create(<Provider store={store}><RocketList /></Provider>)
      .toJSON();
    expect(list).toMatchSnapshot();
  });

  test('List is created', () => {
    const { container } = render(<Provider store={store}><RocketList /></Provider>);
    const list = container.querySelector('.container-fluid');
    expect(list).toBeInTheDocument();
    expect(container).toHaveTextContent('The Falcon 1');
    expect(container).toHaveTextContent('by SpaceX during 2006-2009');
  });

  test('The Rocket discription should have the words Falcon, SpaceX, etc...', () => {
    const { container } = render(<Provider store={store}><RocketList /></Provider>);
    expect(container).toHaveTextContent('The Falcon 1');
    expect(container).toHaveTextContent('by SpaceX during 2006-2009');
  });

  test('If reserved = "true" button text should be, Cancel reservation', () => {
    const { container } = render(<Provider store={store}><RocketList /></Provider>);
    const listbtn2 = container.querySelector('.btn2');
    expect(listbtn2).toHaveTextContent('Cancel reservation');
  });
});
