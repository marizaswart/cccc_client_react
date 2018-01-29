import React, {Component} from 'react';
import './App.css';
import PlantCard from './components/PlantCard';

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
        const plantsList = collection.map(plant => {
            return <PlantCard key={plant.id} plant={plant}/>;
        });

        return (
            <div className="container">
                <h1>Plants</h1>
                {plantsList}
            </div>
        )
    }
}

export default App;
