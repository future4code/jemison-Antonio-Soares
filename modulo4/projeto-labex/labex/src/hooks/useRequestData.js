import {useEffect, useState} from 'react'
import axios from 'axios'



export function useRequestData (url) {

    const [viagem , setViagem] = useState(undefined)
    const [isLoading, setIsLoading] = useState (false)
    const [error, setError]=useState()

    useEffect(() => {
        setIsLoading(true)

         axios.get(url)  // url ja esta sendo chamada pelo components
         .then(response =>{

         setIsLoading(false)
          setViagem(response.data)
         

        }).catch(error =>{
        setIsLoading(false)
          console.log(error)
          setError(error)
        })
      }, [url])
    
      return [viagem, isLoading, error]

    
}


    
    

// post dentro do componente 
// get dentro do resquest 