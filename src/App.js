import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import './reset.css';
import separator from "../src/images/pattern-divider-desktop.svg";
import icon from "../src/images/icon-dice.svg";

const App = () => {
  const [advice, setAdvice] = useState('')
  const [idAdvice, setIdAdvice] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchAdvice = async () => {
    try {
      setIsLoading(true)
      setIsError(false)
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setIdAdvice(data.slip.id);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <div className="information-container">
        {isLoading === true ? (
          <h3>Loading...</h3>
        ) : (
          <div>
            {isError === true ? (
              <div>Advice no Available</div>
            ) : (
              <div>
                <div className="header">ADVICE #{idAdvice}</div>
                <p className="paragraph">
                  "{advice}"
                </p>
                <img className="separator" src={separator} />
                <div className="icon-container">
                  <button onClick={fetchAdvice}>
                    <img src={icon} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
