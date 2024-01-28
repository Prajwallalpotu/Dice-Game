import styled from "styled-components";
import {useState} from 'react';

const NumberSelector = (
    {setError, error, selectedNumber, setSelectedNumber}
) =>{

    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) =>{
        setSelectedNumber(value)
        setError("")
    }

    return(
        <Container>
            <span>{error}</span>
            <div className="flex">
            {
                arrNumber.map((value,i)=> (
                        <Box key={i}
                            isSelected = {value === selectedNumber}
                            onClick={ 
                                () => numberSelectorHandler(value)
                            }
                        >{value}</Box>
                    )
                )
            }
            </div>
            <p>Select Number</p>
            
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .flex{
        display: flex;
        gap: 20px;
    }
    p{
        font-size: 20px;
        font-weight: 600;
    }
    span{
        color: red;
    }
`

const Box = styled.div`
    border: 1px solid black;
    height: 50px;
    width: 50px;
    display: grid;
    place-items: center;
    font-size: 20px;
    font-weight: 600;

    background-color: ${(props) => (props.isSelected ? "black" : "transparent")};
    color: ${(props) => (props.isSelected ? "white" : "black")};

    

    &:hover{
        background-color: black;
        color: white;
        transition: 0.1s ease-in;
    }
`

export default NumberSelector;