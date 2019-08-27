import axios from 'axios'

const api = axios.create({
    baseURL: "http://jsonplaceholder.typicode.com"
})

export const fetchTodoById = (id: number) => api.get(`/todos/${id}`)