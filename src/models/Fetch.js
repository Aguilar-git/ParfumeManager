const METHOD = Object.freeze({
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
});

export default class Fetch {
    static async _get(url, headers) {
        return this.send(METHOD.GET, url, headers)
    }

    static async _post(url, headers, body) {
        return this.send(METHOD.POST, url, headers, body)
    }

    static async _put(url, headers, body) {
        return this.send(METHOD.PUT, url, headers, body)
    }

    static async _delete(url, headers) {
        return this.send(METHOD.DELETE, url, headers)
    }

    static async send(method, url, headers, data = null) {
        return await fetch(url, {
            method,
            headers,
            body: data ? JSON.stringify(data) : null,
        }).then((result) => result?.json())
    }


}