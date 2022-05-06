import Card from "../components/Card";
import CardsWrapper from "../components/CardsWrapper";
import Nav from "../components/Nav";
import useFetch from "../components/useFetch";

export default function EpisodesPage() {
  const { data } = useFetch("https://rickandmortyapi.com/api/episode/");
  console.log(data);
  return (
    <>
      <CardsWrapper>
        {data?.results.map((episode) => (
          <Card key={episode.id} name={episode.name}>
            {episode.name}
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
