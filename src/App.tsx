import TipForm from './components/TipForm';
import Result from './components/Result';

const App = () => {
  return (
    <div className="background">
      <div className="title">
        <h1>SPLITTER</h1>
      </div>
      <div className="content-container">
        <TipForm />
        <Result />
      </div>
    </div>
  );
};

export default App;
