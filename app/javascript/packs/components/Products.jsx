import React from 'react'
import PropTypes from 'prop-types'

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // this.props.toggleCompletedTodoItems()
    }
    render() {
        return (
            <>
                
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Status</th>
                                <th scope="col">Title</th>
                                <th scope="col">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default Products

Products.propTypes = {
}
