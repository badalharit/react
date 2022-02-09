import "./TaskItem.css";
import TaskDate from "./TaskDate";

function MyCustomComponent(props){

    return(
    <div className="task-item">    
        <TaskDate dateValue={props.dateValue} ></TaskDate>
        <div className="task-item__description">
            <h2>{props.courseTitle}</h2>
            <div className="task-item__priority">{props.priority}</div>
        </div>
    </div>
    );
    
}
export default MyCustomComponent;