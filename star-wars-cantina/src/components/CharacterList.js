import React, { useState } from "react";
import Character from "./Character";
import { Link } from "react-router-dom";

function CharacterList({ characters, onDelete }) {
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("name");

  const filteredChar = characters.filter((character) => {
    let lowercase = character.name.toLowerCase();
    return lowercase.includes(search);
  });

  function handleSort(e) {
    setOrderBy(e.target.value);
  }
  
  if (orderBy == "name") {
    filteredChar.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (orderBy == "power") {
    filteredChar.sort((a, b) => b.level - a.level);
  }

  const charList = filteredChar.map((character) => (
    <Character character={character} onDelete={onDelete} key={character.id} />
  ));

  return (
    <div className="App">
      <div className="nav">
        <Link className="links" to="/">
          Home Page
        </Link>
        <Link className="links" to="../addnew">
          Add New Character
        </Link>
        <Link className="links" to="../about">
          About Page
        </Link>
      </div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Type here to search."
          className="input-text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <label for="sort">
          <b>Sort by: </b>
        </label>
        <select id="sort" name="sort" onChange={handleSort}>
          <option value="name">NAME</option>
          <option value="power">POWER LEVEL</option>
        </select>
      </form>
      {charList}
      <div className="nav">
        <Link className="links" to="/">
          Home Page
        </Link>
        <Link className="links" to="../addnew">
          Add New Character
        </Link>
        <Link className="links" to="../about">
          About Page
        </Link>
      </div>
    </div>
  );
}

export default CharacterList;
