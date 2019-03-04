import React, { Component } from 'react';
import './styles/App.css';
import firebase from './firebase'; // import CONFIGURED firebase module
//COMPONENTS
import Form from './components/Form/Form';
import StatsList from './components/StatsList/StatsList';
//ASSETS
import logo from './assets/TO-logo-white.png';
// ----------------------------------------------
// create reference to the firebase database root
const dbRef = firebase.database().ref();
// ----------------------------------------------
class App extends Component {
  constructor(){
    super();
      this.state = {
        statsArrayFantastic: [],
        showForm: true,
        statsJustMe: [],
        statsBike: [],
        statsCar: []
      }
  }
  setShowForm = (trueorfalse) => {
    let newState = trueorfalse
    this.setState({
      showForm: newState
    });
  }
  // ADDING CONTENTS OF FORM TO FIREBASE
  addFormToDatabase = (who1, who2, who3, when, where, events, injuries) => {
    console.log(who1, who2, who3, when, where, events, injuries);
    dbRef.push({
      who1: who1, 
      who2: who2,
      who3: who3,
      when: when,
      where: where,
      events: events,
      injuries: injuries
    });
    
    dbRef.on('value', (snapshot) => {
      this.sortStats(snapshot.val());
    });
  }
  sortStats = (statsObject) => {
    const statsArray = Object.entries(statsObject)
                  .map((item) => {
                    return ({
                      key: item[0],
                      who1: item[1].who1,
                      who2: item[1].who2,
                      who3: item[1].who3,
                      when: item[1].when,
                      where: item[1].where,
                      events: item[1].events,
                      injuries: item[1].injuries
                    });
                  });
    this.setState({
      statsArrayFantastic: statsArray
    })
    // CREATING ARRAYS AND FUNCTIONS FOR STATISTICS COMPONENT
    const arrayWho1 = [];
    const arrayWho2 = [];
    const arrayWho3 = [];
    for (let i = 0; i <this.state.statsArrayFantastic.length; i++) {
      if (this.state.statsArrayFantastic[i].who1 !== '') {
        arrayWho1.push(this.state.statsArrayFantastic[i].who1);
      }
      if (this.state.statsArrayFantastic[i].who2 !== '') {
        arrayWho2.push(this.state.statsArrayFantastic[i].who2);
      }
      if (this.state.statsArrayFantastic[i].who3 !== '') {
        arrayWho3.push(this.state.statsArrayFantastic[i].who3);
      }
      this.setState({
        statsJustMe: arrayWho1,
        statsBike: arrayWho2,
        statsCar: arrayWho3
      })
    };
  }
  // ----------------------------------------------
  render() {
    return (
      <div className="App">
        <header>
          <div className="hero-logo">
            <img src={logo} className="Toronto-logo" alt="City of Toronto logo" />
          </div>
        </header>
        <section className="page-title">
          <div>
            <h1>CycleWatch</h1>
          </div>
        </section>
          <Form addFormToDatabase={this.addFormToDatabase} showForm={this.state.showForm} setShowForm={this.setShowForm} />
          <StatsList showForm={this.state.showForm} setShowForm={this.setShowForm} statsJustMe={this.state.statsJustMe} statsBike={this.state.statsBike} statsCar={this.state.statsCar}/>
        <footer>
          <span>Photo by MURUCUTU on Unsplash</span>
        </footer>
      </div>
    );
  }
}
export default App;
