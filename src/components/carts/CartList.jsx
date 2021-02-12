import React, { Component } from 'react'

export class CartList extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.carts.map((cart, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{cart.name}</td>
                                <td>{cart.price}</td>
                                <td>{cart.qty}</td>
                                <td>{cart.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CartList
