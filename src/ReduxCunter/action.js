export const incrementData = (payload) => {
    return {
        type: 'INCREMENT',
        payload
    }
}

export const decrementData = (payload) => {
    return {
        type: 'DECREMENT',
        payload
    }
}