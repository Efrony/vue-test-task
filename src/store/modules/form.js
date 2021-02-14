
import axios from 'axios'
import router from "../../router";

export default {
    actions: {
        fetchCities({ commit }) {
            axios.get('https://60254fac36244d001797bfe8.mockapi.io/api/v1/city')
                .then(response => {
                    commit('updateCities', response.data)
                })
        },

        sendForm({ commit }, data) {
            axios.post('https://60254fac36244d001797bfe8.mockapi.io/api/v1/send-form', data)
                .then(response => {
                    if (response.data.success) {
                        commit('resetForm')
                        router.push('/success')
                    } else {
                        alert('Ошибка отправки заявки')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    mutations: {
        updateCities(state, cities) {
            state.citiesList = cities
        },
        updateForm(state, newData) {
            state.formData = newData
        },
        resetForm(state) {
            state.formData = {
                city: null,
                online: false,
                title: null,
                titleOther: null,
                text: null,
                screenshot: null,
            }
        }
    },
    state: {
        citiesList: null,
        formData: {
            city: null,
            online: false,
            title: null,
            titleOther: null,
            text: null,
            screenshot: null,
        },
        titlesList: [
            { id: "1", theme: "Не доволен качеством услуг" },
            { id: "2", theme: "Расторжение договора" },
            { id: "3", theme: "Не приходит письмо активации на почту" },
            { id: "4", theme: "Не работает личный кабинет" },
        ],
    },
    getters: {
        cities(state) {
            return state.citiesList
        },
        titles(state) {
            return state.titlesList
        },
        form(state) {
            return state.formData
        }
    }
}
