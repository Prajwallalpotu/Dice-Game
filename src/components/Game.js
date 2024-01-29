import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./StartGame";
import { Rules } from "./Rules";

const Game = () =>{
    const [score,setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setcurrentDice] = useState(1);
    const [error,setError] = useState("");
    const [showRules, setShowRules] = useState(false)

    const randomNumber = (max,min) => {
        return Math.floor(Math.random() * (max-min) + min);
    }

    const resetScore = () =>{
        setScore(0)
    }

    const rollDice = () =>{

        if(!selectedNumber){
            setError("You have not selected any number.");
            return
        }
        

        const ImageNumber = randomNumber(1,7)

        setcurrentDice((prev) => ImageNumber);

        if(selectedNumber === ImageNumber){
            setScore((prev) => prev + 3)
        }
        else{
            setScore((prev) => prev - 1)
        }

        setSelectedNumber(undefined)
    }

    return(
        <div>
        <Score_Numbers>
            <TotalScore  score ={score}/>
            <NumberSelector  
                error = {error}
                setError = {setError}
                selectedNumber = {selectedNumber}
                setSelectedNumber = {setSelectedNumber}
            />
        </Score_Numbers>
        <RollDice  
            currentDice={currentDice}
            rollDice={rollDice}
        />
        <But>
            <div className="Buttons">
                <OutlineButton
                    onClick={resetScore}
                >Reset Score</OutlineButton>
                <Button
                    onClick={() =>
                        setShowRules(prev => !prev)
                    }
                >{ showRules ? "Hide" : "Show"} Rules</Button>
                {showRules && <Rules/>}
            </div>
        </But>
        </div>

    )
}

export default Game

const Score_Numbers = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    height: fit-content;
    align-items: end;
    margin-top: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

    }
`;

const But = styled.div`
    .Buttons {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;

        @media (max-width: 768px) {
            gap: 20px; 
        }
    }
`;

const OutlineButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }

    @media (max-width: 768px) {
    }
`;

