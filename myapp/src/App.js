import './App.css';

function App() {

    /*
    * Example of Imperative style of code (JS)
    */
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello, I'm an example of Imperative style of code (JS).!";
    document.getElementById('root').append(paragraph);

    /*
    * Example of Declarative style of code (React JS)
    */

    return (
      <div>
        <h3>Hello World</h3>
        <p>Hello, I'm an example of Declarative style of code (React JS).!</p>
      </div>
    );
}

export default App;
