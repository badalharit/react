import "./MyCustomComponent.css";

function MyCustomComponent(){
    return(
    <div className="task-item">    
        <div> 8th June 2022 </div>
        <div className="task-item__description">
            <h2>
                Blockchain Course
            </h2>
            <div className="task-item__priority">1</div>
        </div>
    </div>
    );
}
export default MyCustomComponent;