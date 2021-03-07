import AsideDetails from './components/aside-details/AsideDetails.js';
import AsideMenu from './components/aside-menu/AsideMenu.js';
import Content from './components/content/Content.js';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <AsideMenu />
      <Content />
      <AsideDetails />
    </div>
  );
}

export default App;
