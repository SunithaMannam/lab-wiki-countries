import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    countries: [],
  };

  componentDidMount = () => {
    this.setState({ countries });
  };

  render = () => {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflowY: 'scroll' }}
            >
              <div className="list-group">
                <CountriesList countries={this.state.countries} />
              </div>
            </div>
            <Route
              exact
              path="/:cca3"
              render={(props) => (
                <CountryDetails {...props} countries={countries} />
              )}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
