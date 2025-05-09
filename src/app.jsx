import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import travelData from "./data.js";
export default function App() {
  const traveljournal = travelData.map((entry) => {
    return <Entry
        // key = {entry.id} this is used by react to identify which items have changed, are added, or are removed. It is a unique identifier for each element in the list.
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googlemaps={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
    />;
  });
  return (
    <>
      <Header />
      {traveljournal}
    </>
  ); 
}
