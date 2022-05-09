import { useState } from 'react';

//Hook useCounter
function useCounter(initialCounter, maxCounter) {
  const [counter, setCounter] = useState(initialCounter);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return { counter, increment, decrement };
}

// Hook usePage
function usePage(initialPage, lastPage) {
  const [page, setPage] = useState(initialPage);

  const previousDisabled = page === 0;
  const nextDisabled = page === lastPage;

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    setPage(page - 1);
  }

  return { page, nextPage, previousPage, previousDisabled, nextDisabled };
}

// function Hooks
export default function Hooks() {
  const allCharacters = 23;
  const charactersPerPage = 10;
  const pages = Math.ceil(allCharacters / charactersPerPage);

  const { page, nextPage, previousPage, previousDisabled, nextDisabled } =
    usePage(0, pages - 1);

  return (
    <>
      <h1>Hooks</h1>
      <button disabled={previousDisabled} onClick={previousPage}>
        -
      </button>
      <span>{page}</span>
      <button disabled={nextDisabled} onClick={nextPage}>
        +
      </button>
    </>
  );
}
