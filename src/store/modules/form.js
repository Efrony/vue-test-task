
import axios from 'axios'

export default {
    actions: {
        fetchCities({ commit }) {
            axios.get('https://60254fac36244d001797bfe8.mockapi.io/api/v1/city')
            .then(response => {
                console.log(response)
                const cities = response.data
                commit('updateCities', cities)
            })
        },
    },
    mutations: {
        updateCities(state, cities) {
            state.citiesList = cities
        },
    },
    state: {
        citiesList: null,
    },
    getters: {
        cities(state) {
            return state.citiesList
        },
    }
}
