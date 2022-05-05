import Card from "../components/Card";
import CardWrapper from "../components/CardsWrapper";
import { useEffect, useState } from "react";

export default function CharactersPage() {
  const [characterList, setCharacterList] = useState([]);
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacterList(data.results);
      });
  }, []);
  //---------- characterList was filled with setCharacterList
  //   useEffect(()=> {
  //       console.log(characterList);
  //   },[characterList])

  return (
    <CardWrapper>
      {characterList.map((character) => (
        <Card key={character.id} name={character.name}>
          {character.name}
        </Card>
      ))}
    </CardWrapper>
  );
}
