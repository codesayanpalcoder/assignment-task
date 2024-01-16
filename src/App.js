

import React, { Component } from "react";
import Select, { components } from "react-select";
import { colourOptions } from "./data";
import "./App.css";

class CustomSelect extends Component {
  state = {
    values: []
  };

  handleChange = (values) => {
    this.setState({ values });
  };

  render() {
    const { values } = this.state;

    const selectedVals = values.map((x) => x.value);

    return (
      <center>
      <div className="centered-container">
        <Select
          closeMenuOnSelect={false}
          isMulti
          options={colourOptions}
          onChange={this.handleChange}
          value={values}
          components={{ MultiValue, MenuList }}
        />
      </div>
      </center>
    );
  }
}

export default CustomSelect;

const MenuList = (props) => {
  const { children } = props;

  return (
    <components.MenuList {...props} className="centered-menu-list">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          children: (
            <React.Fragment>
              {child.props.children}
            </React.Fragment>
          ),
        });
      })}
    </components.MenuList>
  );
};

const MultiValue = ({ data, ...props }) => {
  return (
    <components.MultiValue {...props}>
      {data.label}
    </components.MultiValue>
  );
};
