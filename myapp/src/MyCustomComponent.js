import "./MyCustomComponent.css";

function MyCustomComponent(props){

    /*---------------------------------------------------------------------------------------------
     * Dynamic Data & Function Calings
     *---------------------------------------------------------------------------------------------
     */

    const string = 'Current Date & Time:';
    function getCourseName(){
        return "Course Name: "
    }

    return(
    <div className="task-item">    
        <div><b>{string}</b></div> &nbsp;
        <div> {props.todaysDate.toISOString()} </div>
        <div className="task-item__description">
            <h2>
            <i>{getCourseName()}</i>{props.courseTitle}
            </h2>
            <div className="task-item__priority">{props.priority}</div>
        </div>
    </div>
    );
}
export default MyCustomComponent;