import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let handleOnClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <Button color="warning" onClick={handleOnClick}>
        A button!
      </Button>
    </div>
  );
}

export default App;
