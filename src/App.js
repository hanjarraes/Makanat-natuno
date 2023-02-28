import AOS from 'aos';
import "./assets/scss/styles.scss";
import 'aos/dist/aos.css';
import TheLayout from './TheLayout';

AOS.init();

const App = () => {
  return (
    <div className="App">
      <TheLayout/>
    </div>
  );
}

export default App;
