const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  key: '17197765-c51078dcc877b1a19d5004a4f',
  query: '',
  fetchImages() {
    const requestParams = `?q=${this.query}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12&key=${this.key}`;

    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      })
      .catch(err =>
        error(
          'Something bad happend.Cannot fetch data from API.Please, try again later.',
        ),
      );
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
