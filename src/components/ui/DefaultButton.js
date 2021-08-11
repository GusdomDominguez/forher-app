import { styled } from '@stitches/react';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { PropTypes } from 'prop-types';

const ButtonContainer = styled('div', {
  width: '100%',
  height: '20%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Button = styled('button', {
  backgroundColor: 'transparent',
  width: '70%',
  height: '50%',
  padding: 'var(--size-1)',
  border: '1px dashed #000000',
  fontSize: 'var(--size-7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.5s ease-out',

  variants: {
    size: {
      small: {
        width: '40%',
      },
      large: {
        width: '70%',
      },
    },

    color: {
      dark: {
        color: '#ECE9E6',
        borderColor: '#ECE9E6',
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },

  '&:hover, &:focus, &:active': {
    color: '#AA076B',
    borderColor: '#AA076B',
  },
});

const DefaultButton = ({ children, color }) => (
  <ButtonContainer>
    <Button color={color}>
      <FiPlus style={{ fontSize: 'var(--size-8)', strokeWidth: '1' }} />
      {children}
    </Button>
  </ButtonContainer>
);

export default DefaultButton;

DefaultButton.propTypes = {
  children: PropTypes.func.isRequired,
  color: PropTypes.string,
};

DefaultButton.defaultProps = {
  color: '',
};
