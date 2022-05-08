import Card from '../components/Card';
import CardsWrapper from '../components/CardsWrapper';
import Nav from '../components/Nav';
import useFetch from '../components/useFetch';

export default function EpisodesPage() {
  const { data } = useFetch('https://rickandmortyapi.com/api/episode/');
  console.log(data);
  return (
    <>
      <CardsWrapper>
        {data?.results.map(episode => (
          <Card key={episode.id} name={episode.name}>
            {episode.name}
            <ul>
              <li>Episode: {episode.episode}</li>
              <li>Air Date: {episode.air_date}</li>
              <ul>
                Characters page:
                {episode.characters.map(character_ => (
                  <li key={episode.id}>{character_}</li>
                ))}
              </ul>
            </ul>
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
