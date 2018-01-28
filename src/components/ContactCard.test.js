import React from 'react';
import ContactCard from './ContactCard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme'


Enzyme.configure({ adapter: new Adapter() });

let wrapper, contact;

describe('<ContactCard />', ()=>{
    beforeEach(() => {
        contact = {
            attributes: {
                name: 'Thomas',
                location: 'Gothenburg',
                image: 'http://example.com',
                twitter: 'thomasochman',
                role: 'Developer'

            }
        };
        wrapper = mount(<ContactCard contact={contact}/>);
    });

    it('displays contact name', () => {
        expect(wrapper.text()).toContain('Thomas');
    });

    it('displays contact location', () => {
        expect(wrapper.text()).toContain('Gothenburg')
    });

    it('displays contact twitter', () => {
        expect(wrapper.text()).toContain('@thomasochman')
    });

});

