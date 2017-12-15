export default function (state = [], action) {
    if (action.type === 'ADD_COUNTRY') {
        if (action.payload === "") {
            return state
        }
        // we have something in the payload
        console.log(action)
        return action.payload;
    } else {
        return state
    }
}