import React, {Component} from 'react';
import Select from '../Select';
import validator from '../../utils/validator';
import errors from '../../utils/errors';
import cx from 'classnames';
import './styles.css';

class AddItem extends Component {
  
  state = {
    record: {
      type: -1,
      currency: 'usd',
      value: '',
      description: '',
      date: null,
      id: null,
    },
    error: {},
  };

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState(prevState => ({
      ...prevState,
      record: {
        ...prevState.record,
        [name]: value,
      },
      error: {
        ...prevState.error,
        [name]: !validator(name, value) ? errors(name): '',
      }
    }));
  }

  handleBlur = ({target}) => {
    const {name, value} = target;
    this.setState(prevState => ({
      ...prevState,
      error: {
        ...prevState.error,
        [name]: !validator(name, value) ? errors(name): '',
      }
    }));
  }

  handleAdd = () => {
    const {record} = this.state;
    this.props.addBudgetItem(record);
    this.setState(prevState => ({
      ...prevState,
      record: {
        ...prevState.record,
        type: -1,
        currency: 'usd',
        value: '',
        description: '',
        date: null,
        id: null,
      }
    }));
  };

  isButtonDisabled = () => {
    const {record, error} = this.state;
    return Object.values(error).some(value => !!value) || !record.value || !record.description;
  }

  render() {
    const {
      record,
      error,
    } = this.state;
    const {
      type,
      currency,
      value,
      description,
    } = record;
    return (
      <div className="AddItem-container">
        <div className="AddItem-budgetTypeFilter">
          <Select
            options={[
              { value: -1, label: 'Expence' },
              { value: 1, label: 'Income' },
            ]}
            name="type"
            value={type}
            onChange={this.handleChange}
            className="AddItem-selectType"
          />
        </div>
        <div className="AddItem-currencyFilter">
          <Select
            options={[
              { value: 'usd', label: `&dollar;` },
              { value: 'eur', label: `&euro;` },
            ]}
            name="currency"
            value={currency}
            onChange={this.handleChange}
            className="AddItem-selectCurrency"
          />
        </div>
        <div className="AddItem-valueInput">
          <input 
            type="text"
            name="value"
            placeholder="100.00" 
            value={value} 
            onChange={this.handleChange}
          />
          {
            error.value ? 
              <small className="AddItem-error">{error.value}</small>: 
              null
          }
        </div>
        <div className="AddItem-decription">
          <input 
            type="text"
            name="description"
            placeholder="Please add your description" 
            value={description} 
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {
            error.description ? 
              <small className="AddItem-error">{error.description}</small>: 
              null
          }
        </div>
        <div className="AddItem-addButton">
          <button 
            onClick={this.handleAdd} 
            disabled={this.isButtonDisabled()}
            className={cx("AddItem-button", {'is-disabled': this.isButtonDisabled()})}
          >Add</button>
        </div>
      </div>
    );
  }
}

export default AddItem;
