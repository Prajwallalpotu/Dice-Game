import styled from "styled-components";
import dices from './images/dices.png';



const StartGame = ( { toggle }) => {
    // let image = "dice_roll/public/images/dices.png";
    return (
        <Container>
            <div>
            <img 
                src = {dices}
                alt="Dice Image"
            />
            </div>
            <div className="main">
                <h1>
                    Dice Game
                </h1>
                <Button
                    onClick={toggle}
                >Play Now</Button>
            </div>
        </Container>
    );
}

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    /* align-content: center; */

    .main{
        h1{
            font-size: 96px;
            font-weight: bold;
            white-space: nowrap;
        }
        margin-left: 50px;
    }
    @media(max-width: 768px){
        flex-direction: column;
        align-content: center;
        img{
            height: 400px;
            width: 500px;
        }
        .main{
            margin-left: 0px;
            text-align: center;
            h1{
                font-size: 70px;
            }
        }
    }
    @media(max-width: 468px){
        img{
            height: 300px;
            width: 400px;
        }
    }
`
export const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    width: 220px;
    height: 44px;
    border: 0px;
    border-radius: 5px;
    font-size: 16px;
    gap: 10px;
    border: 1px solid transparent;
    cursor: pointer;

    &:hover{
        background-color: #fff;
        color: black;
        border: 1px solid black;
        transition: 0.3s ease-in;
    }
`

export default StartGame;