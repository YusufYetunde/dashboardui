import "./Content.css";
import Navbar from '../../components/Navbar/Navbar';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content'>
      <Navbar />
      <ContentMain />
    </div>
  )
}

export default Content
