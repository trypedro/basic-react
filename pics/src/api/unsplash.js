import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 57f89034f0ed33dd93d900f5dfc24e3dec158c96089cdad0a11b7021cfe9ec6e'
    }
})