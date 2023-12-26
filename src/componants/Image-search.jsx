import axios from "axios";
import React ,{useState , useEffect} from "react";


function ImageSearch({setImg}){

    const [search , setSearch] = useState('');

    useEffect(()=>{
        fetchImages(null, "random")
    },[])

    async function fetchImages(e, initialSearch){
        if(e){
         e.preventDefault()
        }
 
        try{
             const response =  await axios.get("https://api.unsplash.com/search/photos",{
                     headers: {
                         "Accept-Version": "v1",
                             "Authorization" : "Client-ID gS4NKYe1wB8XQiaqXxA9ewOXdrpkfw7iOElpuvtS5R0"
                     },
                     params: {
                             query: setSearch || initialSearch
                     }
                 })
                 console.log(response.data.results)
                 setImg(response.data.results);
                 
         }
         catch(error){
             console.log(error)
         }
     }



    return (
        <div>
            <form onSubmit={fetchImages}>
                <input type="text" 
                placeholder="Jo chahiye uska pic bolo tum...."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default ImageSearch;

