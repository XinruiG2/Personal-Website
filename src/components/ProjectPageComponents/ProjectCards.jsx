import React, { useState } from 'react'
import { styled } from 'styled-components'
import Project from './Project';
import ProjectDetails from './ProjectDetails';
import mealGenerator from '../../images/mealGenerator.png'
import newsHomepage from '../../images/newsHomepage.png'

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

const ProjectCards = ({ setShowingDetails, showingDetails }) => {

  const beige = "rgb(210, 203, 193)";
  const softBlack = "rgb(45, 45, 45)";
  const paleBlue = "rgb(156, 165, 185)";
  const softGray = "rgb(120, 120, 120)";
  const almostBlack = "rgb(25, 25, 25)";
  const almostWhite = "rgb(241, 241, 241)";

  const [showMeal, setShowMeal] = useState(false);
  const [showBattleship, setShowBattleship] = useState(false);
  const [showPlanner, setShowPlanner] = useState(false);
  const [showMinesweeper, setShowMinesweeper] = useState(false);
  const [showColdCalling, setShowColdCalling] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleMealClick = () => {
    setShowingDetails(true);
    setShowMeal(true);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleBattleshipClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(true);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handlePlannerClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(true);
    setShowMinesweeper(false);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleMinesweeperClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(true);
    setShowColdCalling(false);
    setShowNews(false);
  }

  const handleColdCallingClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowColdCalling(true);
    setShowNews(false);
  }

  const handleNewClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowMinesweeper(false);
    setShowColdCalling(false);
    setShowNews(true);
  }

  return (
    <div>
      {!showingDetails && <Container>
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
                date="May 2023"
                handleClick={handleBattleshipClick} />
          </Row>
          <Row>
              <Project 
                bgColor={softGray} 
                fontColor={almostWhite}
                name="Planner GUI"
                languages={["Java", "CSS"]}
                date="Jun 2023"
                handleClick={handlePlannerClick} />
              <Project 
                bgColor={paleBlue} 
                fontColor={almostBlack}
                name="Minesweeper"
                languages={["Java"]}
                date="Feb 2021"
                handleClick={handleMinesweeperClick} />
          </Row>
          <Row>
              <Project 
                bgColor={beige} 
                fontColor={almostBlack}
                name="Cold-calling App"
                languages={["Java"]}
                date="Oct 2021"
                handleClick={handleColdCallingClick} />
              <Project 
                bgColor={softBlack} 
                fontColor={almostWhite}
                name="News Homepage"
                languages={["HTML", "CSS"]}
                date="Jan 2023"
                handleClick={handleNewClick} />
          </Row>
      </Container>}
      {showingDetails && <div>
        {showMeal && 
          <ProjectDetails 
            name="Meal Generator"
            languages="Java"
            projectImage={mealGenerator}
            redirectLink="https://github.com/XinruiG2/Meal-Generator.git"
            setDetails={setShowingDetails} />}

        {showBattleship && 
          <ProjectDetails 
            name="Battleship"
            languages="JavaScript, HTML, CSS"
            projectImage={mealGenerator}
            redirectLink="https://github.com/CS-3500-OOD/pa03-XinruiG2.git"
            setDetails={setShowingDetails} />}

        {showPlanner && 
        <ProjectDetails 
          name="Planner GUI"
          languages="Java"
          projectImage={mealGenerator}
          redirectLink="https://github.com/CS-3500-OOD/pa05-miffies.git"
          setDetails={setShowingDetails} />}

        {showMinesweeper && 
        <ProjectDetails 
          name="Minesweeper"
          languages="Java"
          projectImage={mealGenerator}
          redirectLink="https://github.com/CS-3500-OOD/pa05-miffies.git"
          setDetails={setShowingDetails} />}

        {showColdCalling && 
        <ProjectDetails 
          name="Cold-calling App"
          languages="Java"
          projectImage={mealGenerator}
          redirectLink="https://github.com/XinruiG2/ColdCallingProject.git"
          setDetails={setShowingDetails} />}

        {showNews && 
        <ProjectDetails 
          name="News Homepage"
          languages="HTML, CSS"
          projectImage={newsHomepage}
          redirectLink="https://github.com/XinruiG2/News-Homepage.git"
          setDetails={setShowingDetails} />}
      </div>}
    </div>
  )
}

export default ProjectCards