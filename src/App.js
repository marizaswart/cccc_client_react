import React, {Component} from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {collection: []}
    }

    componentDidMount() {
        this.getJson()
    }

    getJson() {
        fetch('https://planted-api.herokuapp.com/api/v1/plants')
            .then(response => response.json())
            .then(response => {
                this.setState({collection: response.data});
                console.log(response.data)
            })
            .catch(err => console.error(err.toString()))
    }

    render() {
        let collection = this.state.collection;
        const contactsList = collection.map(contact => {
            return <ContactCard key={contact.id} contact={contact}/>;
        });

        return (
            <div className="container">
                <h1>Plants</h1>
                {contactsList}
            </div>
        )
    }
}

export default App;
