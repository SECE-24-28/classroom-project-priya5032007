import React, { useState } from "react";

function HelloWorldComponent() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (b) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, c, d] of wins) {
      if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
    }
    return null;
  };

  const handleClick = (idx) => {
    if (winner || board[idx]) return;
    const next = [...board];
    next[idx] = turn;
    setBoard(next);

    const w = checkWinner(next);
    if (w) {
      setWinner(w);
      setIsDraw(false);
    } else if (next.every((cell) => cell !== "")) {
      setIsDraw(true);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  };

  const restart = () => {
    setBoard(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="ttt-page">
      <style>{`
        .ttt-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: pink;
          font-family: Arial, sans-serif;
        }
        .board {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          gap: 10px;
        }
        .cell {
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 10px;
          font-size: 40px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>

      <div>
        <h1>Tic Tac Toe</h1>
        <h2>{winner ? `Winner: ${winner}` : isDraw ? "Draw" : `Turn: ${turn}`}</h2>

        <div className="board">
          {board.map((v, i) => (
            <div key={i} className="cell" onClick={() => handleClick(i)}>
              {v}
            </div>
          ))}
        </div>

        <button onClick={restart} style={{ marginTop: "20px" }}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default HelloWorldComponent;
