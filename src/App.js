
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      <Row isLargeRow={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Netflix Trendings" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Netflix Actions" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Netflix Comedys" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Netflix Horrors" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Netflix Romance" fetchUrl={requests.fetchRomanceMovies}></Row>

      <Row title="Netflix Documentires" fetchUrl={requests.fetchDocumentaries}></Row>


    </div>
  );
}

export default App;
