import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
function Multicomp() {
    const [waifu,setwaifu]=useState({})
    useEffect(()=>{
        getrandomwaifu("sfw","waifu")
    },[])
    function getrandomwaifu(type,category){
        return axios.post(`https://api.waifu.pics/many/${type}/${category}`,{ }).then(res=>res.data).then(data=>setwaifu(data.files))
    }
    function handlechangewafu(e){
        getrandomwaifu("sfw",e.target.value)
    }
    return (
        <div>
            <h1>multi comp</h1>
            <div className="align">
             {waifu.map((w)=><img src={w} width="400px" height="400px" />)}

            </div>
        </div>
    )
}

export default Multicomp
