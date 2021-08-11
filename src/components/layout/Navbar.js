import { FiHome } from 'react-icons/fi';
import { styled } from '@stitches/react';
import PropTypes from 'prop-types';

const NavContainer = styled('div', {
  background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
  width: '100%',
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: 'var(--color-secondary-light)',
  paddingLeft: '5%',

  variants: {
    color: {
      dark: {
        background: 'linear-gradient(90deg, #AA076B 0%, #61045F 100%)',
      },
    },
  },
});

const NavTitle = styled('h2', {
  fontWeight: 100,
  marginLeft: 'var(--size-3)',

  variants: {
    color: {
      dark: {
        fontFamily: 'Poiret One',
      },
    },
  },
});

const Link = styled('a', {
  transition: 'all 0.5s ease-out',

  '&:hover, &:focus, &:active': {
    color: '#AA076B',
  },
});

const Navbar = (props) => {
  const { title, color } = props;
  return (
    <NavContainer color={color}>
      <Link href="/">
        <FiHome
          style={{
            fontSize: '34px',
            strokeWidth: '1',
          }}
        />
      </Link>
      <NavTitle color={color}>{title}</NavTitle>
    </NavContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

Navbar.defaultProps = {
  title: '',
  color: '',
};
