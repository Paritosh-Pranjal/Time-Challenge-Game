import "./App.css";
import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title={"easy"} targetTime={1} />
        <TimeChallenge title={"not easy"} targetTime={5} />
        <TimeChallenge title={"getting tough"} targetTime={10} />
        <TimeChallenge title={"pro"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
