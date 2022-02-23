const key_To_API = '626ffb813ad3999c1a3bd920'

const url_Request_Exchange = coin_Country => `https://v6.exchangerate-api.com/v6/${key_To_API}/latest/${coin_Country}`

const fetch_Url_Exchange = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Something it's wrong...Look out!!!`)
        }

        const objPromise = await response.json()
        return objPromise

    } catch (error) { alert(error.message) }
}

const get_Coin_Value = async coin_Country => {
    const response = await fetch_Url_Exchange(url_Request_Exchange(coin_Country))

    return response
}
