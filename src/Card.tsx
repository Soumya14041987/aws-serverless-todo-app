import './Card.css'
import axios from 'axios'

interface Task {
    id : String , todo : string , done : boolean 
}

const apiUrl = "https://2dwxsedttb.execute-api.us-east-1.amazonaws.com/dev/done"

function markDone( task :  Task, setChange : React.Dispatch<React.SetStateAction<boolean>>  ){

    axios.post(apiUrl, { id : task.id })
    .then(response => {
        // Handle the successful response
            console.log('Response:', response.data);
            setChange( prev => !prev  ) 
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });

}


export function Card({ task  , setChange  } : {task :  Task, setChange  : React.Dispatch<React.SetStateAction<boolean>> }){

    return (
        <div className="card">
            <p className="heading">
                {task.todo}
            </p>
            <p>
                <button onClick={() => markDone(task, setChange )} >DONE</button>
            </p></div>
    )
}