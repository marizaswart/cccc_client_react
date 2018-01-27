import React, {Component} from 'react';

class ContactCard extends Component {

    render() {
        const contact = this.props.contact.attributes;
        return (
            <div className="card">
                <div className="card-image">
                    <img src={contact.image} alt=''/>
                </div>
                <div className="content">
                    <div className="location">
                        {contact.location}
                    </div>
                    <img src={"https://avatars.io/twitter/" + contact.twitter} alt='' className="avatar"/>
                    <h1>{contact.name}</h1>
                    <h2>{contact.role}</h2>
                    <h3>Currently at: {contact.company}</h3>
                    <p>{contact.info}</p>
                    <a href={"mailto:" + contact.email}>{contact.email}</a> |
                    <a href={"http://www.twitter.com/" + contact.twitter}>@{contact.twitter}</a>
                </div>
            </div>
        )
    }
}

export default ContactCard