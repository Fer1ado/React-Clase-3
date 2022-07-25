import './ItemListContainer.css'
import { getProducts} from '../../asyncMock'
import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"


const ItemListContainer = () => {
    const [products, setProducts] = useState([])

 

    useEffect(()=>{
        getProducts().then(products => {
            setProducts(products)
        })

    },[])



    return (
        <>
    
        <ItemList products={products}/>
    
        </>
    )
}

export default ItemListContainer