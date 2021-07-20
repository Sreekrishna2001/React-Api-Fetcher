import React from 'react'
import { useEffect,useState } from 'react'
function Singlepic() {
    const [waifu,setwaifu]=useState("")
    useEffect(()=>{
        getrandomwaifu("sfw","waifu")
    },[])
    function getrandomwaifu(type,category){
        return fetch(`https://api.waifu.pics/${type}/${category}`).then(res=>res.json()).then(data=>setwaifu(data.url))
    }
    function handlechangewafu(e){
        getrandomwaifu("sfw",e.target.value)
    }
    return (
        <div>
           
            <div className="waifuimgcontainer" >
            <img src={waifu} width="400px" height="400px" />
            <h3>Select Your Category</h3>
            <select onChange={handlechangewafu}>
                <option>waifu</option>
                <option>neko</option>
                <option>shinobu</option>
                <option>megumin</option>
                <option>bully</option>
                <option>cuddle</option>
                <option>cry</option>
                <option>hug</option>
                <option>kiss</option>
            </select>
            </div>
        </div>
    )
}

export default Singlepic
