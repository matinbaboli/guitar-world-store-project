import {useState, useMemo, useEffect} from "react"

export default function usePersistantState(initialState, id) {
    const decidedInitialValue = useMemo(() => {
        const stringValueFromLocalStorage = localStorage.getItem("state:" + id)
        if(stringValueFromLocalStorage) {
            return JSON.parse(stringValueFromLocalStorage)
        }
        return initialState
    }, [])
    
    const [state, setState] = useState(decidedInitialValue)

    useEffect(() => {
        const stateString = JSON.stringify(state)
        localStorage.setItem("state:" + id, stateString)
    }, [state])

    return [state, setState]
}