import styled from "styled-components";


const StartGame = ( { toggle }) => {
    return (
        <Container>
            <div>
            <img 
                src="/images/dices.png"
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

    .main{
        h1{
            font-size: 96px;
            font-weight: bold;
            white-space: nowrap;
        }
        margin-left: 50px;
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