import Card from "../components/Card";
import CardsWrapper from "../components/CardsWrapper";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";

export default function EpisodesPage() {
  const [episodeList, setEpisodeList] = useState([]);
  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/episode/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEpisodeList(data.results);
      });
  }, []);
  //---------- characterList was filled with setCharacterList
  //   useEffect(()=> {
  //       console.log(characterList);
  //   },[characterList])

  return (
    <>
      <CardsWrapper>
        {episodeList.map((episode) => (
          <Card key={episode.id} name={episode.name}>
            {episode.name}
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
