import React, {Component} from 'react';

class ContactCard extends Component {

    render() {
        const contact = this.props.contact.attributes;
        return (
            <div className="card">
                <div className="content">
                    <h1>{contact.name}</h1>
                    <h2>{contact.description}</h2>
                </div>
            </div>
        )
    }
}

export default ContactCard