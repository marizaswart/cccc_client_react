import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme'
import App from './App';


Enzyme.configure({ adapter: new Adapter() });

it('display "Contacts"', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.text()).toContain('Contacts')
})