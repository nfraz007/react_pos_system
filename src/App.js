import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/includes/MyNavbar';
import ProductList from './components/products/ProductList';
import { Component } from 'react';
import CartList from './components/carts/CartList';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "paneer butter masala",
        price: 200
      },
      {
        id: 2,
        name: "paneer chilli",
        price: 250
      },
      {
        id: 3,
        name: "roasted chicken",
        price: 300
      },
      {
        id: 4,
        name: "ice cream",
        price: 100
      },
      {
        id: 5,
        name: "Chai",
        price: 10
      },
      {
        id: 6,
        name: "Roti",
        price: 20
      },
    ],
    carts: []
  };

  handleClickItem = (id) => {
    let cartItem = this.state.products.filter((product) => product.id === id);
    cartItem = cartItem[0];
    cartItem.qty = 1;
    cartItem.amount = cartItem.price;
    this.appendCartItem(cartItem);
  }

  appendCartItem = (cartItem) => {
    const productIds = this.state.carts.map((product) => product.id);
    const cartItemIndex = productIds.indexOf(cartItem.id);
    let carts = [];
    if(cartItemIndex !== -1){
      carts = this.state.carts;
      carts[cartItemIndex].qty+=1;
      carts[cartItemIndex].amount = carts[cartItemIndex].price * carts[cartItemIndex].qty;
      console.log(carts);
      
    }else{
      carts = [...this.state.carts, cartItem];
    }
    
    this.setState({carts});
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <ProductList products={this.state.products} onClickItem={this.handleClickItem}/>
            </div>
            <div className="col-sm-4">
              <CartList carts={this.state.carts}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
