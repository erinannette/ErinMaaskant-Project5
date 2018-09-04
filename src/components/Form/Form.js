import React, { Component } from 'react';
import './Form.css';
// ----------------------------------------------
class Form extends Component {
    constructor() {
        super();
        this.state = {
            who1: '',
            who2: '',
            who3: '',
            when: '',
            where: '',
            events: '',
            injuries: '',
        }
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addFormToDatabase(this.state.who1, this.state.who2, this.state.who3, this.state.when, this.state.where, this.state.events, this.state.injuries);
        this.setState({
            who1: '',
            who2: '',
            who3: '',
            when: '',
            where: '',
            events: '',
            injuries: ''
        });
        this.props.setShowForm(false); 
    }
    // ----------------------------------------------
    render(){
        return(
            
            <div className={ ! this.props.showForm ? 'hidden' : ''}>
                <section className="form-wrapper">
                    <h2>Complete the form below to add your incident:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="question one">
                            <p>Who was involved in the incident?</p>
                            <div>
                                <label htmlFor="who1">Just Me</label>
                                <input onChange={this.handleChange} type="text" id="who1" placeholder="X" value={this.state.who1}/>
                            </div>
                            <div>
                                <label htmlFor="who2">Another Cyclist</label>
                                <input onChange={this.handleChange} type="text" id="who2" placeholder="X" value={this.state.who2} />
                            </div>
                            <div>
                                <label htmlFor="who3">Vehicle</label>
                                <input onChange={this.handleChange} type="text" id="who3" placeholder="X" value={this.state.who3} />
                            </div>
                        </div>

                        <div className="question two">
                            <label htmlFor="when">When was your cycling incident?</label>
                            <input onChange={this.handleChange} type="date" id="when" value={this.state.when}/>
                        </div>

                        <div className="question three">
                            <label htmlFor="where">Nearest Intersection:</label>
                            <input onChange={this.handleChange} type="text" id="where" placeholder="Where did it go down" value={this.state.where}/>
                        </div>

                        <div className="question four">
                            <p>Describe the event:</p>
                            <textarea onChange={this.handleChange} name="describeEvents" cols="34" rows="3" id="events" value={this.state.events} />
                        </div>

                        <div className="question five">
                            <p>Describe your injuries:</p>
                            <textarea onChange={this.handleChange} name="describeInjuries" cols="34" rows="3" id="injuries" value={this.state.injuries} />
                        </div>

                        <div className="question submit">
                            <button>Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default Form;