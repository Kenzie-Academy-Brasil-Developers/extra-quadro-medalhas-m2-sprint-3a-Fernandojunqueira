export class Apirequest{

    static baseUrl = 'https://kenzie-olympics.herokuapp.com/paises'
    static headers = {
        "Content-Type": "application/json"
    }

    static async callApi(){

        const quadro = fetch(this.baseUrl, {
            method: 'GET',
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            return res
        })
        return quadro
    }
}

