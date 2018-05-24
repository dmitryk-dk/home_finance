import React, {PureComponent} from 'react';
import Select from '../Select';
import validator from '../../utils/validator';
import errors from '../../utils/errors';
import './styles.css';

class Filter extends PureComponent {

  state={
    error: {},
  }

  handleChange = ({target}) => {
    const {name, value} = target;
    this.setState(prevState => ({
      ...prevState,
      error: {
        ...prevState.error,
        [name]: !validator(name, value) ? errors(name): '',
      }
    }));
    this.props.changeCurrencyRate(value);
  }

  handleSelectChange = ({target}) => {
    const {value} = target;
    this.props.changeCurrencyType(value);
  }

  handleDisableFilter = () => {
    this.props.disableFilter();
  }

  render() {
    const {currencyRate, currencyFilter} = this.props;
    const {error} = this.state;
    return (
      <div className="Filter-container">
        <div className="Filter-selectCurrencyHolder">
          <label>
            Display amount in
          </label>
          <Select
              options={[
                { value: 'usd', label: `&dollar;` },
                { value: 'eur', label: `&euro;` },
              ]}
              name="currencyFilter"
              value={currencyFilter}
              onChange={this.handleSelectChange}
              className="Filter-selectCurrency"
          />
        </div>
        <div className="Filter-currencyInputHolder">
          <label>
            &euro; -> &#36;
          </label>
          <input 
              type="text"
              name="currencyRate"
              placeholder="1.14" 
              value={currencyRate} 
              onChange={this.handleChange}
              className="Filter-currencyInput"
            />
            {
              error.value ? 
                <small className="Filter-error">{error.value}</small>: 
                null
            }
        </div>
        <div className="Filter-cleanButton">
          <button onClick={this.handleDisableFilter} className="Filter-disableFilter">
            Disable filter
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;
