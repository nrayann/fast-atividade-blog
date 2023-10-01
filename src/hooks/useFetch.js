import { useEffect, useState } from "react"

export const useFetch = (url, options) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, options)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Ocorreu um erro ao processar a requisição')
            })
            .then((data) => setData(data))
            .catch((error) => setError(error.toString()))
            .finally(() => setIsLoading(false))
    }, [url, options])


    return { data, isLoading, error }
}