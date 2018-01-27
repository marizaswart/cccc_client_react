import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './ContactCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const contact = {
        attributes: {
            name: 'Thomas',
            location: 'Gothenburg',
            image: 'http://example.com',

        }
    }
    ReactDOM.render(<ContactCard contact={contact}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
