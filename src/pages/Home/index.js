import React from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { styled } from '@stitches/react';

const Container = styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const TitleContainer = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  right: '0',
  left: '0',
  top: '25%',
});

const FirstTitle = styled('h1', {
  color: 'var(--color-primary)',
});

const SecondTitle = styled('h1', {
  color: 'var(--color-secondary-light)',
});

const ColumnsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: '90%',
});

const Column = styled('div', {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background: 'linear-gradient(90deg, #ece9e6 0%, #ffffff 100%)',
  color: 'var(--color-primary-light)',

  variants: {
    color: {
      black: {
        background: 'linear-gradient(90deg, #232526 0%, #2f3031 100%)',
        color: 'var(--color-secondary)',
      },
    },
  },
});

const MemoriesButton = styled('div', {
  background: 'linear-gradient(90deg, #aa076b 0%, #61045f 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10%',
});

const MemoriesButtonTitle = styled('h2', {
  background: 'unset',
  border: 'unset',
  fontFamily: '"Poiret One", cursive',
  fontWeight: 100,
  fontSize: 'var(--size-10)',
  color: 'var(--color-secondary-light)',
});

const LinkPage = styled(Link, {
  transition: 'all 0.5s ease-out',

  '&:hover, &:focus, &:active': {
    color: '#aa076b',
  },
});

const Home = () => (
  <Container>
    <TitleContainer>
      <FirstTitle>FOR</FirstTitle>
      <SecondTitle>HER</SecondTitle>
    </TitleContainer>
    <ColumnsContainer>
      <Column>
        <LinkPage to="/gifts">
          <h2>Gifts</h2>
          <FiArrowLeftCircle style={{ fontSize: '40px', strokeWidth: '1' }} />
        </LinkPage>
      </Column>
      <Column color="black">
        <LinkPage to="/travels">
          <h2>Travels</h2>
          <FiArrowRightCircle style={{ fontSize: '40px', strokeWidth: '1' }} />
        </LinkPage>
      </Column>
    </ColumnsContainer>
    <MemoriesButton>
      <Link to="/memories">
        <MemoriesButtonTitle>MEMORIES</MemoriesButtonTitle>
      </Link>
    </MemoriesButton>
  </Container>
);

export default Home;
