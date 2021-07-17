import axios from 'axios';

class ApiClient {
	constructor() {
		this.apiClient = axios.create({
			baseURL: process.env.REACT_APP_API_URI,
			withCredentials: true,
		});
	}

	me() {
		return this.apiClient.get('/whoami').then(response => response.data);
	}

	signup(user) {
		const { username, password } = user;
		return this.apiClient.post('/signup', { username, password }).then(({ data }) => data);
	}

	login(user) {
		const { username, password } = user;
		return this.apiClient.post('/login', { username, password }).then(({ data }) => data);
	}

	logout() {
		return this.apiClient.post('/logout', {}).then(response => response.data);
	}

	getAlbums() {
		return this.apiClient.get('/album').then(response => response.data);
	}
	
	getArticles(id) {
		return this.apiClient.get(`/album/${id}`).then(response => response.data);
	}

	getAlbumsAndArticles(id) {
		return Promise.all([this.getAlbums(), this.getArticles(id)]);
	}

	getArticle(id) {
		return this.apiClient.get(`/article/${id}`).then(response => response.data);
	}

	getAllArticles() {
		return this.apiClient.get('/article').then(response => response.data);
	}
}

const apiClient = new ApiClient();

export default apiClient;
