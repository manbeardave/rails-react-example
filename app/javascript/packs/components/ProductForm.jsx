import React from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
import setAxiosHeaders from './AxiosHeaders'
class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.titleRef = React.createRef()
        this.descriptionRef = React.createRef()
    }

    handleSubmit(e) {
        e.preventDefault()
        setAxiosHeaders()
        axios
            .post('/api/v1/products', {
                product: {
                  title: this.titleRef,
                  description: this.descriptionRef
                },
            })
            .then(response => {
                const product = response.data
                this.props.createProduct(product)
                this.props.clearErrors()
            })
            .catch(error => {
                this.props.handleErrors(error)
            })
        e.target.reset()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="my-3">
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <input
                            type="text"
                            name="title"
                            ref={this.titleRef}
                            required
                            className="form-control"
                            id="title"
                            placeholder="Product Title"
                        />
                        <input
                            type="text"
                            name="description"
                            ref={this.descriptionRef}
                            required
                            className="form-control"
                            id="description"
                            placeholder="Product Description"
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <button className="btn btn-outline-success btn-block">
                            Create Product
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ProductForm

ProductForm.propTypes = {
    createProduct: PropTypes.func.isRequired,
    handleErrors: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
}
