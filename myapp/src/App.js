import './App.css';
import MyCustomComponent from './TaskItem';

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
      {
        dateValue : new Date(),
        courseTitle: 'Ganache & Truffle',
        priority: 3
      }
    ];

    return (
      <div>
        <h1>To-Do List</h1>
        {
          items.map(
            (item) => {
              return (<MyCustomComponent dateValue={item.dateValue}
                           courseTitle={item.courseTitle} 
                           priority={item.priority}>
                      </MyCustomComponent>)
            }
          )
        }
      </div>
    );
}

export default App;
