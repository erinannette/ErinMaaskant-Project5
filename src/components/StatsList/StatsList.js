import React, { Component } from 'react';
import './StatsList.css';
// ----------------------------------------------
class StatsList extends Component {
    constructor() {
        super();
        this.state = {
            // showForm: true
        }
    }

    handleClick = (e) => {
        this.props.setShowForm(true);
    }

// ----------------------------------------------
    render() {
        return (
            <div className={this.props.showForm ? 'hidden' : ''}>
                <section className="stats-list">                    
                    <h2>Thank you for adding your incident to our database.</h2>
                    <h3>Number of Recorded Incidents</h3>
                    
                    <div>
                        <i className="fas fa-bicycle"></i>
                        <p>{this.props.statsJustMe.length} incidents with no other party</p>
                    </div>

                    <div>
                        <i className="fas fa-bicycle"></i><i className="fas two fa-bicycle"></i>
                        <p>{this.props.statsBike.length} incidents with another cyclist</p>
                    </div>

                    <div>
                        <i className="fas fa-bicycle"></i><i className="fas fa-car-crash"></i>
                        <p>{this.props.statsCar.length} incidents with a car</p>
                    </div>
                    <div>
                        <button onClick={this.handleClick}>Back</button>
                    </div>
                </section>
            </div>
        )
    }
}
export default StatsList;