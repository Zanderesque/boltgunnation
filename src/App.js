import { ContentContainer } from "./components/ContentContainer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div style={appContainerStyle}>
      <Navbar />
      <ContentContainer />
    </div>
  );
}

const appContainerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

export default App;
