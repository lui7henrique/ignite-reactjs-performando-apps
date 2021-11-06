import { FormEvent, useState } from "react";
import { SearchResults } from "./components/SearchResults";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    console.log(data);
    setResults(data);
  };

  const addToWishList = async (id: number) => {
    console.log(id);
  };

  return (
    <div>
      <h1>Search</h1>
      <form action="" onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <SearchResults results={results} onAddToWishList={addToWishList} />
    </div>
  );
}

export default App;
