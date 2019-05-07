import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {sum} from './math';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('Examining the syntax of Jest tests', () => {
   
  it('sums numbers', () => {
      expect(sum(1,2)).toEqual(3);
      expect(sum(2,3)).toEqual(5);
   });
});


// enzyme
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
});