import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { ballState, divBallsState } from '../Redux/action';
import { Ball } from './AllBalls';

const BallContainer = styled.div`
border: 1px solid grey;
height: 300px;
width: 300px;
background-color: #deeaee;
display: flex;
flex-wrap: wrap;
`;

const BallDiv = () => {

    const divBallData = useSelector(state => state.divBalls);
    const balls = useSelector(state => state.balls);
    console.log('divBall', divBallData)
    const dispatch = useDispatch();

    const onBallClick = (id) => {
        let payload1 = [...balls];

        let payload2 = divBallData.filter((ball) => {
            if (ball.position != id) {
                return ball;
            }
            else {
                payload1.push(ball)
            }
        })
        payload1.sort(function (a, b) {
            return a.position - b.position;
        })
        dispatch(ballState(payload1));
        dispatch(divBallsState(payload2));
    }

    return (
        <>
            <BallContainer>
                {divBallData.map(item => (
                    <Ball onClick={() => onBallClick(item.position)} key={item.position}>Ball {item.position}</Ball>
                ))}
            </BallContainer>
        </>
    )
}

export default BallDiv