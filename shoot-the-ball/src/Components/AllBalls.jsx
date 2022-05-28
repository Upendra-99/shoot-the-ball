import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

const ScreenCenter = styled.div`
height: 80vh;
width: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export let Ball = styled.div`
  margin: 2%;
  border-radius: 50%;  
  height: 60px;
  width: 60px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const AllBalls = () => {

    // fetched all data from source to show vertically;
    const SourceBallData = useSelector(state => state.source);

    return (
        <ScreenCenter>
            {
                SourceBallData.map((ball) => (
                    <Ball key={ball.id} style={{ backgroundColor: ball.color, display: ball.display }}></Ball>
                ))
            }

        </ScreenCenter>
    )
}

export default AllBalls