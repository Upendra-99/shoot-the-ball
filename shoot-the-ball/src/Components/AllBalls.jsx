import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { ballReducer } from '../Redux/reducer';
import { ballState, divBallsState } from '../Redux/action';

export let Ball = styled.div`
margin: 10px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: red;
  color: white;
  font-weight: 500;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const AllBalls = () => {

    const ballData = useSelector(state => state.balls);


    return (
        <div>
            {
                ballData.map((ball) => (
                    <Ball key={ball.position} id={ball.position}>Ball {ball.position}</Ball>
                ))
            }
        </div>
    )
}

export default AllBalls