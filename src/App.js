import './scss/index.scss';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
