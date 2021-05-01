import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Row title={"Trending Now"} fetchURL={request.fetchTrending} isbigger={false} />
      <Row title={"Top Hindi Movies"} fetchURL={request.fetchDiscoverHindi} isbigger={true} />
      <Row title={"Top Telugu Movies"} fetchURL={request.fetchDiscoverTe} />
      <Row title={"Top Kannada Movies"} fetchURL={request.fetchDiscoverKn} />
    </div>
  );
}

export default App;
