import React from "react";
import styled from "styled-components";

export const Rules = () =>{
    return(
        <Container>
            <h2>How to Play the Dice Game:</h2>
            <div className="text"> 
            <ul>
                <li><p>Choose a number.</p></li>
                <li><p>Click on the dice.</p></li>
                <li><p>If your chosen number matches the rolled dice number, you earn <span className="green">+3</span> points.</p></li>
                <li><p>If your guess is incorrect, you <span className="red">lose 1</span> point.</p></li>
                
            </ul>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: lightpink;
    padding: 20px;
    margin-bottom: 100px;
    border-radius: 10px;
    h2{
        font-size: 20px;
        margin-bottom: 30px;
    }
    p{
        font-weight: lighter;
    }
    .green{
        color: green;
    }
    .red{
        color: red;
    }
`