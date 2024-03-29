import { useState } from "react";
import styled from "styled-components";

const RollDice = (
    {
        currentDice,
        rollDice
    }
) =>{
    return(
        <Container>
            <div className="dice"
                    onClick={rollDice}
                >
                <img src={`/images/dice/dice_${currentDice}.png`}/>
            </div>
            <p>Click on Dice to roll</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    .dice{
        cursor: pointer;
    }
    p{
        font-size: 20px;
    }
`


export default RollDice