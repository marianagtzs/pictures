import axios from  'axios'

const searchImage = async(term)=>{
    const url = 'https://api.unsplash.com/search/photos/?client_id=pk_BUEZM07iI6XLWeOV-8B3CMbYevrgqgtuu5_t8GYk'
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