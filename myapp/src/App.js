import './App.css';
import MyCustomComponent from './MyCustomComponent';

function App() {

    /*
    * Example of Imperative style of code (JS)
    */
    // const paragraph = document.createElement("p");
    // paragraph.textContent = "Hello, I'm an example of Imperative style of code (JS).!";
    // document.getElementById('root').append(paragraph);

    /*
    * Example of Declarative style of code (React JS)
    */

    const myDataObject = {
      object1:{
        todaysDate : new Date(),
        courseTitle: 'Solidity & Etherium',
        priority: 1
      },
      object2:{
        todaysDate : new Date(),
        courseTitle: 'Smart Contracts & Etherium',
        priority: 2
      },
    };

    return (
      <div>
        <h3>Hello World</h3>
        <p>Hello, I'm an example of Declarative style of code (React JS).!</p>
        <MyCustomComponent todaysDate={myDataObject.object1.todaysDate}
                           courseTitle={myDataObject.object1.courseTitle} 
                           priority={myDataObject.object1.priority}>
        </MyCustomComponent>
        <MyCustomComponent todaysDate={myDataObject.object2.todaysDate}
                           courseTitle={myDataObject.object2.courseTitle} 
                           priority={myDataObject.object2.priority}>
        </MyCustomComponent>
      </div>
    );
}

export default App;
