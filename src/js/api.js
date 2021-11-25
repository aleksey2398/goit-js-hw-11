
import axios from "axios";

export default {
key: '24499282-2c88a00bf4afff93913de8ef0',
query: '',
image_type: "photo",
orientation: "horizontal",
safesearch: true,
page: 1,
per_page: 40,

async fetchImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=${this.key}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
    const res = await response.data;
    return res;
}
}