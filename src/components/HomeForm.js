import React, { Component } from 'react';

// import HomeFormList from './HomeFormList';
import FormInputs from './FormInputs';

class HomeForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: "",
      formList: [{
        Destination: "",
        SelectBudget: ""
      }]
    }
  }

  addNewItem(destination, selectBudget) {
    let item = {
      Destination: destination,
      SelectBudget: selectBudget
    }

    let updatedList = this.state.formList.slice();
    updatedList.push(item);
    this.setState({
      formList: updatedList
    });
  }

  render() {
    let HomeFormListItem = this.state.formList
      .filter(item => item.Destination.toLowerCase()
      .includes(this.state.text.toLowerCase()))
      .map(items => items);

    return (
      <div>
          <FormInputs add={(destination, selectBudget) => this.addNewItem(destination, selectBudget)} />
      </div>
    )
  }
}

export default HomeForm;
