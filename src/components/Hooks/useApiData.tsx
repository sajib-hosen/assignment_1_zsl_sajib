import { useEffect, useState } from "react";
import { fetData } from "../Types/DataTypes";


const useApiData = () => {
    const [itemsData, setItemsData] = useState({} as fetData)

    useEffect(()=>{
        fetch('http://hn.algolia.com/api/v1/items/1')
        .then( res => res.json())
        .then(data => {
            setItemsData( data )
        })
    },[])

    return {
        itemsData,
    }
};

export default useApiData;

