import React from 'react';
import ContactCard from './ContactCard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme'


Enzyme.configure({ adapter: new Adapter() });

let wrapper, plant;

describe('<PlantCard />', ()=>{
    beforeEach(() => {
        plant = {
            attributes: {
                name: 'Aloe Vera',
                description: 'The Aloe Vera plant (succulent type) is well known for offering possible health and beauty benefits. This succulent is a tough species that is very easy to care for and rarely presents problems for most growers.',
            }
        };
        wrapper = mount(<PlantCard plant={plant}/>);
    });

    it('displays plant name', () => {
        expect(wrapper.text()).toContain('Aloe Vera');
    });

    it('displays plant description', () => {
        expect(wrapper.text()).toContain('The Aloe Vera plant (succulent type) is well known for offering possible health and beauty benefits. This succulent is a tough species that is very easy to care for and rarely presents problems for most growers.')
    });

});

