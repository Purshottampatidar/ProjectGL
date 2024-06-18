import Accordion from "./Components/Accordion";
function App() {
  const nthOpen = [1,5];
  const isMultipleOpening = false;
  return (
    <>
      <Accordion
        nthOpen={nthOpen}
        isMultipleOpening={isMultipleOpening}
      />
    </>
  );
}
export default App;
