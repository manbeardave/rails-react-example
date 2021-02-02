import React from 'react'
import PropTypes from 'prop-types'

import _ from 'lodash'
import axios from 'axios'
import setAxiosHeaders from './AxiosHeaders'
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: this.props.product.complete,
        }
        this.handleDestroy = this.handleDestroy.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.updateTodoItem = this.updateTodoItem.bind(this)
        this.inputRef = React.createRef()
        this.completedRef = React.createRef()
        this.path = `/api/v1/products/${this.props.product.id}`
    }
    handleChange() {
        this.setState({
            complete: this.completedRef.current.checked,
        })
        this.updateProduct()
    }
    handleDestroy() {
        setAxiosHeaders()
        const confirmation = confirm('Are you sure?')
        if (confirmation) {
            axios
                .delete(this.path)
                .then(response => {
                    this.props.getProducts()
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    render() {
        const { product } = this.props
        return (
            <tr>
                <td>
                    <svg
                        className={`bi bi-check-circle`}
                        width="2em"
                        height="2em"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M17.354 4.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L10 11.293l6.646-6.647a.5.5 0 01.708 0z"
                            clipRule="evenodd"
                        ></path>
                        <path
                            fillRule="evenodd"
                            d="M10 4.5a5.5 5.5 0 105.5 5.5.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 0010 4.5z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </td>
                <td>
                    <input
                        type="text"
                        defaultValue={product.title}
                        description={product.description}
                        ref={this.inputRef}
                        className="form-control"
                        id={`product__title-${product.id}`}
                    />
                </td>
                <td className="text-right">
                    <div className="form-check form-check-inline">
                        <input
                            type="text"
                            defaultValue={product.title}
                            ref={this.completedRef}
                            className="form-control"
                            id={`complete-${product.id}`}
                        />
                    </div>
                            
                </td>
            </tr>
        )
    }
}

export default Product

Product.propTypes = {
    product: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}
