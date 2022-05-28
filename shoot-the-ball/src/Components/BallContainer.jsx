import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { destinationBallsState, sourceBallAction } from '../Redux/action';
import { Ball } from './AllBalls';

const ScreenLeft = styled.div`
height: 80vh;
width: 30%;
display: flex;
justify-content: center;
align-items: center;

`;
const BallContainerDiv = styled.div`
margin-left: 5%;
margin-top: 5%;
border: 1px solid grey;
height: 40%;
width: 70%;
border-radius: 4px;
background-color: #deeaee;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

const BallContainer = () => {
    const dispatch = useDispatch();

    //fetch source and destination balls data from redux-store;
    const sourceBallData = useSelector(state => state.source);
    const destinationBallData = useSelector(state => state.destination);


    const handleShoot = (id) => {
        // remove ball from destination;
        const newDestinationBallData = destinationBallData.filter((item) => item.id !== id);

        // add ball to source after removing from destination;
        const newSourceBallData = sourceBallData.map((item) => {
            if (item.id == id) {
                item.display = "block";
            }
            return item;
        })

        // re-arranging the position of balls in source after getting added a ball;
        let count = 1;
        const orderedSourceBallData = newSourceBallData.map((item) => {
            if (item.display == "block") {
                item.position = count;
                count++;
            }
            return item;
        })

        // updating data of source and destination after removing one ball from destination;
        dispatch(sourceBallAction(orderedSourceBallData))
        dispatch(destinationBallsState(newDestinationBallData))
    }

    return (
        <ScreenLeft >
            <BallContainerDiv>
                {destinationBallData.map(item => (
                    <Ball onClick={() => handleShoot(item.id)} key={item.id} style={{ backgroundColor: item.color, height: "30%", width: "20%" }}> </Ball>
                ))}
            </BallContainerDiv>
        </ScreenLeft>
    )
}

export default BallContainer