import './App.css';
import MyCustomComponent from './MyCustomComponent';

function App() {

    const items = [
      {
        dateValue : new Date(),
        courseTitle: 'Solidity & Etherium',
        priority: 1
      },
      {
        dateValue : new Date(),
        courseTitle: 'Smart Contracts & Etherium',
        priority: 2
      },
    ];

    return (
      <div>
        <h1>To-Do List</h1>
        <MyCustomComponent dateValue={items[0].dateValue}
                           courseTitle={items[0].courseTitle} 
                           priority={items[0].priority}>
        </MyCustomComponent>
        <MyCustomComponent dateValue={items[1].dateValue}
                           courseTitle={items[1].courseTitle} 
                           priority={items[1].priority}>
        </MyCustomComponent>
      </div>
    );
}

export default App;
