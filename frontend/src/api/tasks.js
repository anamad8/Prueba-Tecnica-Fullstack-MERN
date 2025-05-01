import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/tasks';

const getAuthHeader = () => ({
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const getTasks = () => axios.get(API_BASE, getAuthHeader());

export const createTask = (task) =>
    axios.post(API_BASE, task, getAuthHeader());

export const updateTask = (id, task) =>
    axios.put(`${API_BASE}/${id}`, task, getAuthHeader());

export const deleteTask = (id) =>
    axios.delete(`${API_BASE}/${id}`, getAuthHeader());