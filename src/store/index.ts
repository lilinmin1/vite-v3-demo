import { createStore } from 'vuex'

const defaultState = {
    count: 0
}

export default createStore({
    state() {
        return defaultState
    },
    getters: {
        double(state: typeof defaultState) {
            return 2 * state.count
        }
    }
})