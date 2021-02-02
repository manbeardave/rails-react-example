import React from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import Products from './Products'
import Product from './Product'
import ProductForm from './ProductForm'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
class ProductApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: true,
            errorMessage: null,
        }
        this.getProducts = this.getProducts.bind(this)
        this.createProduct = this.createProduct.bind(this)
        this.handleErrors = this.handleErrors.bind(this)
        this.clearErrors = this.clearErrors.bind(this)
    }
    componentDidMount() {
        this.getProducts()
    }
    getProducts() {
        axios
            .get('/api/v1/products')
            .then(response => {
                this.clearErrors()
                this.setState({ isLoading: true })
                const products = response.data
                this.setState({ products })
                this.setState({ isLoading: false })
            })
            .catch(error => {
                this.setState({ isLoading: true })
                this.setState({
                    errorMessage: {
                        message:
                            'There was an error loading your products...',
                    },
                })
            })
    }
    createProduct(product) {
        const products = [product, ...this.state.products]
        this.setState({ products })
    }
    handleErrors(errorMessage) {
        this.setState({ errorMessage })
    }
    clearErrors() {
        this.setState({
            errorMessage: null,
        })
    }
    render() {
        return (
            <>
                {this.state.errorMessage && (
                    <ErrorMessage errorMessage={this.state.errorMessage} />
                )}
                {!this.state.isLoading && (
                    <>
                        <ProductForm
                            createProduct={this.createProduct}
                            handleErrors={this.handleErrors}
                            clearErrors={this.clearErrors}
                        />
                        <Products>
                            {this.state.products.map(product => (
                                <Product
                                    key={product.id}
                                    product={product}
                                    getProducts={this.getProducts}
                                    handleErrors={this.handleErrors}
                                    clearErrors={this.clearErrors}
                                />
                            ))}
                        </Products>
                    </>
                )}
                {this.state.isLoading && <Spinner />}
            </>
        )
    }
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('products-app')
    app && ReactDOM.render(<ProductApp />, app)
})
