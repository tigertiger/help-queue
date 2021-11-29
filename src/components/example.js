// ItemControl.js

import React from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import EditItemForm from './EditItemForm';

//Seed Data

const mainItemList = [
  {
    id: '1',
    name: 'Army Soldier',
    description: '',
    quantity: 0,
  },
  {
    id: '2',
    name: 'Shakespeare',
    description: '',
    quantity: 15,
  },
  {
    id: '3',
    name: 'Business Man',
    description: '',
    quantity: 11,
  },
  {
    id: '4',
    name: 'Mr. President',
    description: '',
    quantity: 2,
  },
  {
    id: '5',
    name: 'We Can Do It!',
    description: '',
    quantity: 5,
  }
];

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: mainItemList,
      selectedItem: null,
      editing: false,
      // purchasing: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({ mainItemList: newMainItemList, formVisibleOnPage: false });
  };

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(
      (item) => item.id === id
    )[0];
    this.setState({ selectedItem: selectedItem });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  // handlePurchaseClick =() => {
  //   console.log("handlePurchaseClick reached!");
  //   this.setState({ purchasing: true });
  // };

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter((item) => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null,
    });
  };

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(
      (item) => item.id !== id
    );
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null,
    });
  };

  handlePurchaseItem = () => {
    let purchaseItem = this.state.mainItemList.filter(item => item.id === this.state.selectedItem.id)[0];

    console.log(purchaseItem);

    if (purchaseItem.quantity <= 0) {
      alert(purchaseItem.name + " is out of stack.");
    } else {
      purchaseItem = purchaseItem.quantity--;

      this.setState({
        purchaseItem: purchaseItem,
        // purchasing: false
      });
    }
  };

  handleRestockItem = () => {
    let restockItem = this.state.mainItemList.filter(item => item.id === this.state.selectedItem.id)[0];
    

      restockItem.quantity +=5;

      this.setState({
        restockItem: restockItem
      });
    }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditItemForm
          item={this.state.selectedItem}
          onEditItem={this.handleEditingItemInList}
        />
      );
      buttonText = "Return to Item List";
    } else if (this.state.selectedItem != null) {
      currentlyVisibleState = (
        <ItemDetail
          item={this.state.selectedItem}
          onClickingDelete={this.handleDeletingItem}
          onClickingEdit={this.handleEditClick}
          onClickingPurchase={this.handlePurchaseItem}
          onClickingRestock={this.handleRestockItem}
        />
      );
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      );
      buttonText = "Return to Merch List"; // new code
    } else {
      currentlyVisibleState = (
        <ItemList
          itemList={this.state.mainItemList}
          onItemSelection={this.handleChangingSelectedItem}
        />
      );
      buttonText = "Add merch"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
        {/* new code */}
      </React.Fragment>
    );
  }
}

export default ItemControl;


/// ItemDetail.js

import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete, } = props;

  return (
<React.Fragment>
<h1>Item Detail</h1>
<h3>{item.name} - {item.description}</h3>
      <p><em>{item.quantity}</em></p>
      <button onClick={ props.onClickingPurchase}>Purchase Item</button>
      <button onClick={ props.onClickingRestock}> Restock Item</button>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
</React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingPurchase: PropTypes.func
};

export default ItemDetail;