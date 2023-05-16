import Like from "./components/Like";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
    "Suiza",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;