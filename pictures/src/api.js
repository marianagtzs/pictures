import axios from  'axios'

const searchImage = async(term)=>{
    const url = 'https://api.unsplash.com/search/photos/?client_id=365cH_K1AghQclsvRIy0n6YZIQgwiuaK-EePOUeO3_A'
    const response = await axios.get(url, {
        params: {
            query :  term
        } 
    })

    console.log(term)
    console.log(response.data.results)

    return response.data.results
}

export default searchImage