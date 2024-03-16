/* eslint-disable react/prop-types */
import { useState } from "react";

const Header = ({ name }) => <h1>{name}</h1>;

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const StatisticsLine = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticsLine text={"good"} value={good} />
          <StatisticsLine text={"neutral"} value={neutral} />
          <StatisticsLine text={"bad"} value={bad} />
          <StatisticsLine text={"all"} value={all} />
          <StatisticsLine text={"average"} value={average} />
          <StatisticsLine text={"positive"} value={positive} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback is given</p>;
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  const total = good + neutral + bad;
  const avg = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <Header name={"give feedback"} />
      <Button name={"good"} onClick={handleGoodClick} />
      <Button name={"neutral"} onClick={handleNeutralClick} />
      <Button name={"bad"} onClick={handleBadClick} />
      <Header name={"statistics"} />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={total}
        average={avg}
        positive={positive}
      />
    </div>
  );
};

export default App;
