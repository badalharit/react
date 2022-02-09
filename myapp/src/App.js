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

    const items = [
      {
        todaysDate : new Date(),
        courseTitle: 'Solidity & Etherium',
        priority: 1
      },
      {
        todaysDate : new Date(),
        courseTitle: 'Smart Contracts & Etherium',
        priority: 2
      },
    ];

    return (
      <div>
        <h3>Hello World</h3>
        <p>Hello, I'm an example of Declarative style of code (React JS).!</p>
        <MyCustomComponent todaysDate={items[0].todaysDate}
                           courseTitle={items[0].courseTitle} 
                           priority={items[0].priority}>
        </MyCustomComponent>
        <MyCustomComponent todaysDate={items[1].todaysDate}
                           courseTitle={items[1].courseTitle} 
                           priority={items[1].priority}>
        </MyCustomComponent>
      </div>
    );
}

export default App;
