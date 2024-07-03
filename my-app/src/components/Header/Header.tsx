import React from "react";
import "./Header.css";

interface HeaderProps {
  scrollToBody: () => void;
  scrollToSlider: () => void;
  scrollToAccordion: () => void;
  scrollToFuter: () => void;
}

export const Header: React.FC<HeaderProps> = ({ scrollToBody, scrollToSlider, scrollToAccordion, scrollToFuter }) => {
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
              <a className="nav_link" onClick={scrollToBody}>Как это работает</a>
              <a className="nav_link" onClick={scrollToSlider}>3-й блок</a>
              <a className="nav_link" onClick={scrollToAccordion}>Вопросы и ответы</a>
              <a className="nav_link" onClick={scrollToFuter}>Форма</a>
            </nav>
          </div>
          <div className="intro">
            <div className="intro_suptitle">Говорят, никогда не поздно сменить профессию</div>
            <div className="intro_title">Сделай круто тестовое задание и у тебя получится</div>
            <a className="btn" onClick={scrollToAccordion}>Проще простого!</a>
          </div>
        </div>
      </header>
    );
}

export default Header;