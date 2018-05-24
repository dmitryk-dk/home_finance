import React, {Component} from 'react';

class Select extends Component {
  
  handleChange = (e) => {
    const {onChange} = this.props;
    if (typeof onChange === 'function') {
      onChange(e);
    }
  }

  makeOptions() {
    const {options} = this.props;
    if (options) {
      return options.map((item) => {
        return (
          <option 
            key={item.value} 
            value={item.value}
            dangerouslySetInnerHTML={{ __html: item.label}}
          />
        );
      });
    }
  }

  render() {
    const {
      id,
      name,
      className,
      value,
      disabled,
    } = this.props;
    return (
      <select
        id={id}
        name={name}
        className={className}
        value={value}
        onChange={this.handleChange}
        disabled={disabled}>
        {this.makeOptions()}
      </select>
    );
  }
}

export default Select;
