import React, { useState } from 'react'
import { styled } from 'styled-components'
import Project from './Project';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 12px;
    margin-top: 50px;
    z-index: 100;
    margin-bottom: 23px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 100%;
`;

const ProjectCards = () => {

  const beige = "rgb(210, 203, 193)";
  const softBlack = "rgb(45, 45, 45)";
  const paleBlue = "rgb(156, 165, 185)";
  const softGray = "rgb(120, 120, 120)";
  const almostBlack = "rgb(25, 25, 25)";
  const almostWhite = "rgb(241, 241, 241)";

  const [showGeneral, setShowGeneral] = useState(false);
  const [showMeal, setShowMeal] = useState(false);
  const [showBattleship, setShowBattleship] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [showMinesweeper, setShowMinesweeper] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showStudy, setShowStudy] = useState(false);
  const [showColdCalling, setShowColdCalling] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleMealClick = () => {
    setShowGeneral(false);
    setShowMeal(true);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowPortfolio(false);
    setShowStudy(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleBattleshipClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(true);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowPortfolio(false);
    setShowStudy(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handlePlannerClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(true);
    setShowMinesweeper(false);
    setShowPortfolio(false);
    setShowStudy(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleMinesweeperClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(true);
    setShowPortfolio(false);
    setShowStudy(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handlePortfolioClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowPortfolio(true);
    setShowStudy(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleStudyClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowPortfolio(false);
    setShowStudy(true);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleColdCallingClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowPortfolio(false);
    setShowStudy(false);
    setShowColdCalling(true);
    setShowNews(false);
  }

  const handleNewClick = () => {
    setShowGeneral(false);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowPortfolio(false);
    setShowStudy(false);
    setShowColdCalling(false);
    setShowNews(true);
  }

  return (
    <Container>
        <Row>
            <Project 
              bgColor={beige} 
              fontColor={almostBlack}
              name="Meal Generator"
              languages={["JavaScript", "HTML", "CSS"]}
              date="Aug 2023" 
              handleClick={handleMealClick} />
            <Project 
              bgColor={softBlack} 
              fontColor={almostWhite}
              name="Battleship"
              languages={["Java"]}
              date="May 2023" />
        </Row>
        <Row>
            <Project 
              bgColor={softGray} 
              fontColor={almostWhite}
              name="Planner GUI"
              languages={["Java", "CSS"]}
              date="Jun 2023" />
            <Project 
              bgColor={paleBlue} 
              fontColor={almostBlack}
              name="Minesweeper"
              languages={["Java"]}
              date="Feb 2021" />
        </Row>
        <Row>
            <Project 
              bgColor={beige} 
              fontColor={almostBlack}
              name="Portfolio Template"
              languages={["HTML", "CSS"]}
              date="Dec 2022" />
            <Project 
              bgColor={softBlack} 
              fontColor={almostWhite}
              name="Study helper"
              languages={["Java"]}
              date="May 2023" />
        </Row>
        <Row>
            <Project 
              bgColor={softGray} 
              fontColor={almostWhite}
              name="Cold-calling App"
              languages={["Java"]}
              date="Oct 2021" />
            <Project 
            bgColor={paleBlue} 
            fontColor={almostBlack}
            name="News Homepage"
            languages={["HTML", "CSS"]}
            date="Jan 2023" />
        </Row>
    </Container>
  )
}

export default ProjectCards