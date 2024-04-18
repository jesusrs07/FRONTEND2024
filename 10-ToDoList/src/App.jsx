
import List from "./List"
const tasklist=[
  {
    id:1,
    task:"estudiar",
    limit:"15:00",
  },{
    id:2,
    task:"practicar",
    limit:"18:00",
  },{
    id:3,
    task:"dormir",
    limit:"23:00",
  },
]
function App() {

  return (
    
    <div>
    <h1>To Do List</h1>
    <hr/>
    <List
    
    tasklist={tasklist}    
    />
    
  </div>

  )
}

export default App
