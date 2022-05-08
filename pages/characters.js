import Card from '../components/Card';
import CardsWrapper from '../components/CardsWrapper';
import Nav from '../components/Nav';
import useFetch from '../components/useFetch';

export default function CharactersPage() {
  const { data } = useFetch('https://rickandmortyapi.com/api/character/');
  return (
    <>
      <CardsWrapper>
        {data?.results.map(character => (
          <Card key={character.id} name={character.name}>
            {character.name}
            <img src={character.image} alt={character.name} />
            <ul>
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Location: {character.location.name}</li>
            </ul>
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
