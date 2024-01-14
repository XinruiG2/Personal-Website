import React, { useState } from 'react'
import { styled } from 'styled-components'
import Project from './Project';
import ProjectDetails from './ProjectDetails';
import mealGenerator from '../../images/mealGenerator.png'
import newsHomepage from '../../images/newsHomepage.png'
import battleship from '../../images/battleship.png'
import planner from '../../images/planner.png'

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
  const [showNews, setShowNews] = useState(false);

  const handleMealClick = () => {
    setShowingDetails(true);
    setShowMeal(true);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowNews(false);
  }

  const handleBattleshipClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(true);
    setShowPlanner(false);
    setShowNews(false);
  }

  const handlePlannerClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(true);
    setShowNews(false);
  }

  const handleNewClick = () => {
    setShowingDetails(true);
    setShowMeal(false);
    setShowBattleship(false);
    setShowPlanner(false);
    setShowNews(true);
  }

  const mealGeneratorDescription = 
    "I created 'Meal Generator' because I wanted to have a tool for helping"
    + " me when I didn't know what to cook. Since it was my first time having"
    + " access to a kitchen in my dorm, I was nervous about efficiently using all of my groceries and planning my meals."
    + " However, building this application really helped me out when I was on a time crunch"
    + " and didn't have much time to decide what to make with food in my fridge."

  const mealGeneratorMeaning = 
    "'Meal Generator' was my first project done using React outside of work. So, it really gave me the freedom "
    + "to explore more interesting UI designs and make considerations about layouts on my own.";

  const newsDescription = 
  "This layout I created is from a Frontend Mentor challenge."
  + " If you're unfamiliar with Frontend Mentor, it's a platform that puts out"
  + " front-end projects and challenges you to recreate them given certain font and color guidelines.";

  const newsMeaning = 
    "Completing this project really helped me become more passionate about front-end web development. "
    + "I had only learned HTML and CSS 1-2 months prior to taking on this challenge, so I was still unconfident "
    + "about my knowledge and doubted whether front-end was right for me. However, I had so much fun and learned so many new things "
    + "while completeing it. 'News Homepage' was the first application I had designed "
    + "without a tutorial and really helped me feel more confident in and motivated to improve my front-end skills.";

  const battleshipDescription = 
    "Battleship was a console-based game I created for my OOD class."

  const battleshipMeaning = 
    "It was an interesting project to work on because it allowed me to implement "
    + "concepts of model, view, and controller that we had learned in class. I also implemented "
    + "optimized guessing strategies to give players a challenge. The one I chose is known as a "
    + "hunt-and-target guessing algorithm.";

  const plannerDescription = 
    "This was also a project I created for my OOD class."
    + " The aim of the project was to create a weekly planner to keep track of"
    + "events and tasks.";

  const plannerMeaning = 
    "This project is special to me because I got to work with two other dedicated and talented people on it."
    + " Each of us brought different strengths to the project and together we managed to bring our creative ideas to life.";

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
            setDetails={setShowingDetails}
            description={mealGeneratorDescription}
            meaning={mealGeneratorMeaning} />}

        {showBattleship && 
          <ProjectDetails 
            name="Battleship"
            languages="JavaScript, HTML, CSS"
            projectImage={battleship}
            redirectLink="https://github.com/CS-3500-OOD/pa03-XinruiG2.git"
            setDetails={setShowingDetails}
            description={battleshipDescription}
            meaning={battleshipMeaning} />}

        {showPlanner && 
        <ProjectDetails 
          name="Planner GUI"
          languages="Java"
          projectImage={planner}
          redirectLink="https://github.com/CS-3500-OOD/pa05-miffies.git"
          setDetails={setShowingDetails}
          description={plannerDescription}
          meaning={plannerMeaning} />}

        {showNews && 
        <ProjectDetails 
          name="News Homepage"
          languages="HTML, CSS"
          projectImage={newsHomepage}
          redirectLink="https://github.com/XinruiG2/News-Homepage.git"
          setDetails={setShowingDetails}
          description={newsDescription}
          meaning={newsMeaning} />}
      </div>}
    </div>
  )
}

export default ProjectCards