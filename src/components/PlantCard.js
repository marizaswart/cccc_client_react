import React, {Component} from 'react';

class PlantCard extends Component {

    render() {
        const plant = this.props.plants.attributes;
        return (
            <div className="card">
                <div className="content">
                    <h1>{plant.name}</h1>
                    <h2>{plant.description}</h2>
                </div>
            </div>
        )
    }
}

export default PlantCard