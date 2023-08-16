import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/'

export async function createRequest(form, data) {
    var url = new URL(BASE_URL + form['url'])
    var headers = {
        'content-type': 'application/json'
    }

    return await axios({
        method: form['method'],
        url: url,
        data: data
    })
}