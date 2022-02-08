import "./MyCustomComponent.css";

function MyCustomComponent(props){

    /*---------------------------------------------------------------------------------------------
     * Dynamic Data & Function Calings
     *---------------------------------------------------------------------------------------------
     */

    const todaysDate = new Date();
    const priority = 1;

    function getCourseName(){
        return "Blockchain with React JS"
    }

    return(
    <div className="task-item">    
        <div> {props.todaysDate.toISOString()} </div>
        <div className="task-item__description">
            <h2>
                {props.courseTitle}
            </h2>
            <div className="task-item__priority">{props.priority}</div>
        </div>
    </div>
    );
}
export default MyCustomComponent;