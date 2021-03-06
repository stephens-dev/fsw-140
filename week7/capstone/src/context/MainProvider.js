import React, {
    useContext,
    useState
} from 'react'
import axios from 'axios'
// import inputs from '../components/AddTodo'

export const MainContext = React.createContext()

export default function MainProvider(props) {
    const initState = {
        display: [],
        newTodo: []
    }


    const [mainState, setMainState] = useState(initState)

    function getdisplay() {
        axios.get("/gettodos")
            .then(res => {
                setMainState({

                    display: res.data
                })
            })
    }

    function addTodo(newTodo) {
        axios.post("/posttodo",newTodo)
        .then(res => {
            // console.log(newTodo)
                setMainState(prevState => {
                    return ({
                        ...prevState,
                        newTodo: [...prevState.newTodo, res.data]
                    })
                })
            }).catch(err => console.log(newTodo))
    }
    function deleteTodo(todoId) {
        console.log(props.display)
        axios.delete(`/deletetodo/:${todoId}`)
        .then(res => {
            setMainState(prevState => prevState.filter(todo => todo.id !== todoId))

        })
        .catch(err => console.log(err))
        
    }

    return ( 
        <MainContext.Provider value = {
            {
                ...mainState,
                getdisplay,
                addTodo,
                deleteTodo
            }
        } > {
            props.children
        } 
        </MainContext.Provider>
    )


}