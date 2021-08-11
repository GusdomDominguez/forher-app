import Navbar from '../../components/layout/Navbar';
import DefaultButton from '../../components/ui/DefaultButton';
import PageContainer from '../../components/ui/PageContainer';

const Memories = () => (
  <PageContainer color="dark">
    <Navbar title="Memories" color="dark" />
    <DefaultButton color="dark">Add new Memory</DefaultButton>
  </PageContainer>
);

export default Memories;
