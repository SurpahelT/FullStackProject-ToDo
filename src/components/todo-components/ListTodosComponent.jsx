

export default function ListTodosComponent(){
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate },
        {id: 2, description: 'Learn React', done: false, targetDate:targetDate},
        {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate}
    
    ]
        return(
        <div className="container">
            <div>
                <h1> To do </h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Description</td>   
                                <td>Is done?</td>
                                <td>Target Date</td> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(element => (
                                    <tr key={element.id}>
                                        <td>{element.id}</td>
                                        <td>{element.description}</td>
                                        <td>{element.done.toString()}</td>
                                        <td>{element.targetDate.toDateString()}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                    </table>
                </div>
        </div>
    )
}