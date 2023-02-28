import './App.css';
import ListTask from './Components/ListTask';
import Addtask from './Components/Addtask';


function App() {
  // const [Tasks, setTasks] = useState([
  //   { name: "Work Out", description: "A physical activity designed to improve health and fitness by challenging the body through strength training, cardio, or both. It can include exercises like weightlifting, running, cycling, or yoga, and can be performed in a gym, at home, or outdoors.", done: false },
  //   { name: "Eating", description: "Eating is the act of consuming food to provide sustenance and nourishment for the body. It is a crucial aspect of maintaining physical health and wellbeing.", done: true },
  //   { name: "Watch a Movie", description: "Watching movies is a great way to escape reality and immerse yourself in a story. It's a form of entertainment that can bring laughter, tears, and excitement to any viewer.", done: false },
  // ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tasks</h1>
        <ListTask />
        <h1>Add Task</h1>
        <Addtask />
      </header>
    </div>
  );
}

export default App;
