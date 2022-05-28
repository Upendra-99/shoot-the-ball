import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { destinationBallsState, sourceBallAction } from '../Redux/action'

const TextInput = () => {

    const ScreenRight = styled.div`
    height: 80vh;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
 `

    let Input = styled.input`
      padding: 5%;
      width: 80%;
      border-radius: 3px;
      border: 1px solid grey;
    `
    let Button = styled.button`
      padding: 5%;
      width: 50%;
      border-radius: 3px;
      border: 0px solid transparent;
      background-color: grey;
      color: white;
      cursor:pointer;
    `
    const [value, setValue] = useState()

    let onChageHandler = (e) => {
        setValue(e.target.value)
    }

    const dispatch = useDispatch();

    // fetched source and destinatio balls data from redux-store;
    const sourceBallData = useSelector(state => state.source)
    const destinationBallData = useSelector(state => state.destination)

    const handleSourceBall = (e) => {
        e.preventDefault();

        (value > sourceBallData.length) ? alert("Position doesn't exist") : setValue()

        // variable containing updated ball info of destination;
        let newDestinationBallData = [...destinationBallData];

        // variable containing updated ball info of source;
        let newSourceBallData = sourceBallData.map(item => {

            // making a ball hidden which is clicked;
            if (item.position == value) {
                item.display = "none";
                item.position = null;

                // adding ball in destination which is shooted;
                newDestinationBallData.push(item)
            }
            setValue(0)
            return item;
        })

        // updating the ball info in destination (container);
        dispatch(destinationBallsState(newDestinationBallData));

        let count = 1;
        // re-arrangin the position of rest of balls after removing a ball;
        let orderedPayload1 = newSourceBallData.map((item) => {
            if (item.display == "block") {
                item.position = count;
                count++;
            }
            return item;
        })

        // updating the balls info in source;
        dispatch(sourceBallAction(orderedPayload1))
    }

    return (
        <ScreenRight>
            <form action="" onSubmit={handleSourceBall}>
                <Input type="number" value={value} onChange={onChageHandler} placeholder='Enter ball positon' required /> <br /><br />
                <Button type="submit" value={"Shoot"} > SHOOT </Button>
            </form>
        </ScreenRight>
    )
}

export default TextInput