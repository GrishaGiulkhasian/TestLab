import React from "react";
import "./Header.css";

export const Header: React.FC = () => {
    return(
        <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_logo">
                <div className="cor_uno"></div>
                <div className="cor_two"></div>
                testLab
            </div>
            <nav className="nav">
              <a className="nav_link" href="#info-section">Как это работает</a>
              <a className="nav_link" href="#servis-section">3-й блок</a>
              <a className="nav_link" href="#kyrs-section">Вопросы и ответы</a>
              <a className="nav_link" href="#kont-section">Форма</a>
            </nav>
          </div>
          <div className="intro">
            <div className="intro_suptitle">Говорят, никогда не поздно сменить профессию</div>
            <div className="intro_title">Сделай круто тестовое задание и у тебя получится</div>
            <a className="btn" href="#kyrs-section">Проще простого!</a>
          </div>
        </div>
      </header>
    );
}

export default Header;