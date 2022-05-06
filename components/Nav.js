import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

export default function Nav() {
  return (
    <StyledNav>
      <Button>
        <Link passHref href="/">
          <a>Home</a>
        </Link>
      </Button>

      <Button>
        <Link passHref href="/characters">
          <a>Characters</a>
        </Link>
      </Button>

      <Button>
        <Link passHref href="/characters">
          <a>Episodes</a>
        </Link>
      </Button>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: chartreuse;
  background-color: black;
  position: fixed;
  bottom: 0px;
  width: 100vw;
`;
