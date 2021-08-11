import { styled } from '@stitches/react';
import { PropTypes } from 'prop-types';

const Container = styled('div', {
  background: 'linear-gradient(90deg, #ece9e6 0%, #ffffff 100%)',
  width: '100vw',
  height: '100vh',

  variants: {
    color: {
      dark: {
        background: 'linear-gradient(90deg, #232526 0%, #414345 100%)',
      },
    },
  },
});
const PageContainer = ({ children, color }) => (
  <Container color={color}>{children}</Container>
);

export default PageContainer;

PageContainer.propTypes = {
  children: PropTypes.func.isRequired,
  color: PropTypes.string,
};

PageContainer.defaultProps = {
  color: '',
};
