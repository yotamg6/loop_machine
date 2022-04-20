import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MultiPlayer from "./components/MultiPlayer";

const sources = [
  {
    source: require("./tracks/B_VOC.mp3"),
    title: "B VOC",
  },
  {
    source: require("./tracks/DRUMS.mp3"),
    title: "Drums",
  },
  {
    source: require("./tracks/HE_HE_VOC.mp3"),
    title: "He He",
  },
  {
    source: require("./tracks/HIGH_VOC.mp3"),
    title: "High VOC",
  },
  {
    source: require("./tracks/JIBRISH.mp3"),
    title: "Jibrish",
  },
  {
    source: require("./tracks/LEAD_1.mp3"),
    title: "Lead 1",
  },
  {
    source: require("./tracks/tambourine_shake_higher.mp3"),
    title: "Tambourine shake higher",
  },
  {
    source: require("./tracks/UUHO_VOC.mp3"),
    title: "UUHO VOC",
  },
];

function App() {
  return (
    <>
      <ToastContainer />
      <MultiPlayer sources={sources} />
    </>
  );
}

export default App;
