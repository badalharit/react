function TaskDate(props){
    const month = props.dateValue.toLocaleString('en-US',{month:'long'});
    const day = props.dateValue.toLocaleString('en-US',{day:'2-digit'});
    const year = props.dateValue.getFullYear();

    return(
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}
export default TaskDate;