import { Component } from "react"
import ProductItem from "./ProductItem"

class ProductList extends Component {
    render() {
        return (
            <div className="mt-4">
                <h4>Product List</h4>
                <div className="row">
                    {this.props.products.map((product, index) => (
                        <div className="col-sm-2" key={index}>
                            <ProductItem product={product} onClickItem={this.props.onClickItem}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ProductList;