import Listitem from "./Listitem"

const List=({tasklist})=>{


return (
    
    <>
    
    <div className="row">
      <div className="col-6">
<h4> Tasks</h4>
      </div>
      <div className="col-2">
<h4>Limit </h4>
      </div>
      <div className="col">
<h4> actions</h4>
      </div>
    </div>
    {
        tasklist.map((task)=>{
            return(
                <Listitem
                key={task.id}
                task={task.task}
                limit={task.limit}
                />
            )
        }
    )
    }
   
   </>

  )
}
export default List