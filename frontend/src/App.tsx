import DashBoard from "./components/Dashboard";
import ListProvider from "./context/ListProvider";

function App() {
  return (
    <div>
      <ListProvider>
        <DashBoard />
      </ListProvider>
    </div>
  );
}

export default App;
