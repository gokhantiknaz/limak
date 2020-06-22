import axios from 'axios'

export default class CarService {

	getAll() {
		return axios.get('assets/layout/data/cars-small.json').then(res => res.data.data);
	}

}