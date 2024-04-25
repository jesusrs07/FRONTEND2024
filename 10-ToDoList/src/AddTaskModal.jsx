import withReactContent from "sweetalert2-react-content"
import { useForm } from "./Hooks/UseForm"
import Swal from "sweetalert2"

const taskInfo = {
    task: '',
    description: '',
    location: '',
    limit: '',
}

const AddTaskModal = ({taskList, setTaskList}) => {
    const [values, handleInputChange, reset] = useForm (taskInfo)

    const MySwal = withReactContent(Swal)

    const handleSaveClic = () => {
        const newTaskList = [...taskList,{
            id: taskList.length +1,
            ...values,
            done: false
        }] 

        setTaskList(newTaskList)

        localStorage.setItem('taskList', JSON.stringify(newTaskList))

        reset()

        MySwal.fire({
            icon: 'success',
            title: 'Task added',
        })

    }


    return (
        <div className="modal fade" id={"addTaskModal"}>
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="addTaskModal">Add New Task </h5>
            <button type="button"
            className="btn-close"
            data-bs-dismiss="modal">
            </button>
            </div>
            <div className="modal-body container">
            <div className="modal-body container">
                <div className="row text-start">
                <div className="col">
                    <label className="form-label" htmlFor="task">Task</label>
                    <input 
                       type="text"
                       className="form-control"
                       id="task"
                       name="task"
                       value={values.task}
                       onChange={handleInputChange}/>

                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea
                       className="form-control"
                       id="description"
                       name="description"
                       value={values.description}
                       onChange={handleInputChange}/>

                    <label className="form-label" htmlFor="location">Location</label>
                    <input 
                       className="form-control"
                       id="location"
                       name="location"
                       value={values.location}
                       onChange={handleInputChange}/>

                    <label className="form-label" htmlFor="limit">Limit time</label>
                    <input 
                       type="time"
                       className="form-control"
                       id="limit"
                       name="limit"
                       value={values.limit}
                       onChange={handleInputChange}/>
                </div>
                </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className='btn btn-sm btn-outline-primary' 
                onClick={handleSaveClic}
                data-bs-dismiss="modal">
                 <i className="bi bi-pencil-square"></i>
                 Save
               </button>
                 <button type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-dismiss="modal"
                >Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal