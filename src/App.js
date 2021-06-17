import './App.css';
import WorkSpace from './components/WorkSpace';
import Provider from './provider/Provider';

function App() {
  return (
    <Provider>
      <WorkSpace />
    </Provider>
  );
}

export default App;
