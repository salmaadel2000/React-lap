import axios from "axios";
const baseUrl="http://localhost:3001/bags"
const getAll=()=>axios.get(baseUrl);

const getById = (Id) => axios.get(`${baseUrl}/${Id}`);

const addNew = (bag) => axios.post(baseUrl, bag);
const editBag = (id, bag) => axios.put(`${baseUrl}/${id}`, bag);
const deleteBag = (Id) => axios.delete(`${baseUrl}/${Id}`);

export { getAll, getById, addNew, editBag, deleteBag };