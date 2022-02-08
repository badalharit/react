import "./MyCustomComponent.css";

function MyCustomComponent(){

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
        <div> {todaysDate.toISOString()} </div>
        <div className="task-item__description">
            <h2>
                {getCourseName()}
            </h2>
            <div className="task-item__priority">{priority}</div>
        </div>
    </div>
    );
}
export default MyCustomComponent;