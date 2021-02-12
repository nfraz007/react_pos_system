import React, { Component } from 'react'

export class ProductItem extends Component {
    render() {
        const {id, name, price} = this.props.product;
        return (
            <div>
                <button className="btn btn-primary btn-block" onClick={() => this.props.onClickItem(id)} style={{ height: "120px" }}>
                    {name}
                    <br></br>
                    (Rs {price})
                </button>
            </div>
        )
    }
}

export default ProductItem
