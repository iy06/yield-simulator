import './index.scss';
import { Header } from '../../components/Header/index.js';
import { Footer } from '../../components/Footer/index.js';
import { TabBar} from '../../components/TabBar/index.js';
import { TabPanel } from '../../components/TabPanel/index.js';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <TabBar />
      <TabPanel />
      <Footer />
    </div>
  );
}


