const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {
    console.log('stte', state, action)
    if (action.type === 'input_change_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        console.log('new', newState)
        return newState
    }
    if (action.type === 'del_todo_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}