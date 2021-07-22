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

	getAlbum(id) {
		return this.apiClient.get(`/album/${id}/detail`).then(response => response.data);
	}
	
	getArticles(id) {
		return this.apiClient.get(`/album/${id}`).then(response => response.data);
	}

	getAlbumAndArticles(id) {
		return Promise.all([this.getAlbum(id), this.getArticles(id)]);
	}

	getArticle(id) {
		return this.apiClient.get(`/article/${id}`).then(response => response.data);
	}

	getAlbumAndArticle(albumId, articleId) {
		return Promise.all([this.getAlbum(albumId), this.getArticle(articleId)]);
	}

	getAllArticles() {
		return this.apiClient.get('/article').then(response => response.data);
	}

	addNewAlbum(album) {
		return this.apiClient.post('/album', album).then(response => response.data);
	}

	addNewArticle(article) {
		return this.apiClient.post('/article', article).then(response => response.data);
	}

	editAlbum(id, album) {
		return this.apiClient.put(`/album/${id}`, album).then(response => response.data);
	}

	editArticle(id, article) {
		return this.apiClient.put(`/article/${id}`, article).then(response => response.data);
	}

	deleteAlbum(id) {
		return this.apiClient.delete(`/album/${id}`).then(response =>response.data);
	}

	deleteArticle(id) {
		return this.apiClient.delete(`/article/${id}`).then(response =>response.data);
	}
}

const apiClient = new ApiClient();

export default apiClient;
