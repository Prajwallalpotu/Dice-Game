import React from "react";
import styled from "styled-components";

export const Rules = () =>{
    return(
        <Container>
            <h2>How to Play Dice Game</h2>
            <div className="text"> 
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>After click on dice if selected number is equal to dice number you will get <b className="green">+3</b> points.</p>
                <p>If you get wrong guess <b className="red">-1</b> points</p>
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