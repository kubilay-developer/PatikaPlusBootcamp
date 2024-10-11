import { useState } from 'react';
import './App.css';
import './index.css'

const App = () => {
  const [player1Dice, setPlayer1Dice] = useState(6); // Başlangıç değeri
  const [player2Dice, setPlayer2Dice] = useState(6); // Başlangıç değeri
  const [result, setResult] = useState("Refresh Me"); // Sonuç mesajı
  const [rolling, setRolling] = useState(false); // Zarın yuvarlanma durumu
  const [player1Name, setPlayer1Name] = useState("Player 1"); // Oyuncu 1 adı

  const rollDice = () => {
    setRolling(true);

    // 3 saniye boyunca zar yüzlerini sürekli değiştirme
    const interval = setInterval(() => {
      const randomPlayer1 = Math.floor(Math.random() * 6) + 1;
      const randomPlayer2 = Math.floor(Math.random() * 6) + 1;
      setPlayer1Dice(randomPlayer1);
      setPlayer2Dice(randomPlayer2);
    }, 100);

    // 3 saniye sonra zarları durdur
    setTimeout(() => {
      clearInterval(interval);
      const finalPlayer1 = Math.floor(Math.random() * 6) + 1;
      const finalPlayer2 = Math.floor(Math.random() * 6) + 1;
      setPlayer1Dice(finalPlayer1);
      setPlayer2Dice(finalPlayer2);

      // Sonuçları kontrol et
      if (finalPlayer1 > finalPlayer2) {
        setResult(`${player1Name} Kazandı!`);
      } else if (finalPlayer2 > finalPlayer1) {
        setResult("PC Kazandı!");
      } else {
        setResult("Berabere!");
      }

      setRolling(false);
    }, 3000);
  };

  return (
    <div className="container">
      <h1>{result}</h1>

      <div className="dice">
        <p>{player1Name}</p>
        <img
          className="img1"
          src={`/images/dice${player1Dice}.png`}
          alt="Player 1 Dice"
        />
      </div>

      <div className="dice">
        <p>Player 2 (PC)</p>
        <img
          className="img2"
          src={`/images/dice${player2Dice}.png`}
          alt="Player 2 Dice"
        />
      </div>

      <button onClick={rollDice} disabled={rolling}>
        {rolling ? "Rolling..." : "Roll Dice"}
      </button>

      <div>
        <input
          type="text"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
          placeholder="Player 1 Name"
        />
      </div>

      <footer> 🎲 Dice Game 🎲 </footer>
    </div>
  );
};

export default App;
