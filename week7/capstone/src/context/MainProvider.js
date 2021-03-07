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
    // error
    // 
    // 
    function deleteTodo(todoId) {
        console.log(todoId)
        axios.delete("/deletetodo/"+ todoId)
        .then(res => {
            setMainState(prevState => ({...prevState, 
                display: prevState.display.filter(todo => todo.id !== todoId)}))

        })
        .catch(err => console.log(err))
        
    }

    function updateTodo(e,todoId ,newTodo) {
        e.preventDefault()
        console.log(newTodo, todoId)
        axios.put(`/updatetodo/${todoId}`, newTodo)
        .then(res => {
            setMainState(prevState => ({...prevState, 
                display: prevState.display.map(todo => {
                    
                  if( todo.id !== todoId) {
                      return todo
                  }else {
                      console.log(newTodo)
                      return todo
                  }
                })}))

        }).catch(err => console.log(newTodo))
    }

    return ( 
        <MainContext.Provider value = {
            {
                ...mainState,
                getdisplay,
                addTodo,
                deleteTodo,
                updateTodo
            }
        } > {
            props.children
        } 
        </MainContext.Provider>
    )


}