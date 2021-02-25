import React, {
    useContext,
    useState
} from 'react'
import axios from 'axios'

export const MainContext = React.createContext()

export default function MainProvider(props) {
    const initState = {
        display: []
    }

    const [mainState, setMainState] = useState(initState)

    function getdisplay() {
        axios.get("/getdisplay")
            .then(res => {
                setMainState({

                    display: res.data
                })
            })
    }
    console.log(mainState)
    return ( 
        <MainContext.Provider value = {
            {
                ...mainState,
                getdisplay
            }
        } > {
            props.children
        } 
        </MainContext.Provider>
    )


}