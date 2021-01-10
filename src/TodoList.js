import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChangeValue} />
                    <button onClick={this.props.addTodoItem}>提交</button>
                </div>
                <ul>
                    {this.props.list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => {this.props.delTodoItem(index)}}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChangeValue(e) {
            const action = {
                type: 'input_change_value',
                value: e.target.value
            }
            dispatch(action)
        },
        addTodoItem() {
            const action = {
                type: 'add_todo_item'
            }
            dispatch(action)
        },
        delTodoItem(index) {
            console.log('index', index)
            const action = {
                type: 'del_todo_item',
                index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);