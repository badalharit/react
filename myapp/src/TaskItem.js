import "./TaskItem.css";

function MyCustomComponent(props){

    const month = props.dateValue.toLocaleString('en-US',{month:'long'});
    const day = props.dateValue.toLocaleString('en-US',{day:'2-digit'});
    const year = props.dateValue.getFullYear();

    return(
    <div className="task-item">    
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className="task-item__description">
            <h2>{props.courseTitle}</h2>
            <div className="task-item__priority">{props.priority}</div>
        </div>
    </div>
    );
    
}
export default MyCustomComponent;