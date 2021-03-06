import React from 'react'
import PropTypes from 'prop-types'

class TodoItems extends React.Component {
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
                                <th scope="col">Item</th>
                                <th scope="col" className="text-right">
                                    Actions
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
export default TodoItems

Products.propTypes = {
}
