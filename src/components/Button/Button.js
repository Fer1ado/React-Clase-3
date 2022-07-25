import React, {useEffect} from 'react'

const Button = () => {

const handleclick = () =>{
    console.log("hola")
}

    useEffect(() =>{
        document.getElementById("button").addEventListener("click", handleclick)

        return () =>{
            document.getElementById("button").removeEventListener("click", handleclick)
        }
    }, [])

  

    return (
        <button id="button">Button</button>
    )
}

export default Button