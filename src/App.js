import Row from "./Row";
import request from "./request";
import Banner from './Banner'

function App() {
  return (
    <div className="App">
    <Banner />
      <Row title={"Trending Now"} fetchURL={request.fetchTrending} isbigger={true} />
      <Row title={"Top Hindi Movies"} fetchURL={request.fetchDiscoverHindi } islarger={true} />
      <Row title={"Top Telugu Movies"} fetchURL={request.fetchDiscoverTe} />
      <Row title={"Top Kannada Movies"} fetchURL={request.fetchDiscoverKn} />
    </div>
  );
}

export default App;
