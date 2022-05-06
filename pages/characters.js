import Card from "../components/Card";
import CardsWrapper from "../components/CardsWrapper";
import Nav from "../components/Nav";
import useFetch from "../components/useFetch";

export default function CharactersPage() {
  const { data } = useFetch("https://rickandmortyapi.com/api/character/");

  return (
    <>
      <CardsWrapper>
        {data?.results.map((character) => (
          <Card key={character.id} name={character.name}>
            {character.name}
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
