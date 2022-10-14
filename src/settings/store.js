import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            menuItems: [
                { text: 'What we do', url: '/test' },
                { text: 'The Digital divide', url: '/test' },
                { text: 'Get involved', url: '/test' },
                { text: 'Insights', url: '/test' },
            ]
        }
    },
})

export default store