import React, { Component } from 'react';

import HomeFormList from './HomeFormList';
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
      text: "",
      formList: updatedList
    });
  }

  render() {
    let HomeFormListItem = this.state.formList
      .filter(item => item.Destination.toLowerCase()
      .includes(this.state.text.toLowerCase()))
      .map(items => items);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body">
              <FormInputs formList={HomeFormListItem} add={(destination, selectBudget) => this.addNewItem(destination, selectBudget)} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

            <HomeFormList items={HomeFormListItem} toggleFavorite={index => this.toggleFavorite(index)} updateSearch={event => this.updateSearch(event)} />

          </div>
        </div>
      </div>
    )
  }
}

export default HomeForm;
