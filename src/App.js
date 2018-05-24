import React, { Component } from 'react';
import AddItem from './containers/AddItemContainer';
import ItemsList from './containers/ItemsListContainer';
import Balance from './containers/BalanceContainer';
import Filter from './containers/FilterContainer';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {

  render() {
    const {records} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Home Finance</h1>
        </header>
        <div className="App-container">
          <AddItem />
          {
            records.length > 0 ?
              <div>
                <Filter /> 
                <ItemsList />
                <Balance />
              </div>
              : 
              <p>Add Some Financial Records</p>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  records: state.controlRecords.records,
});

export default connect(mapStateToProps)(App);
