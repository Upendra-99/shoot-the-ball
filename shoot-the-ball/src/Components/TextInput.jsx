import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ballState, divBallsState } from '../Redux/action'

const TextInput = () => {
    let Input = styled.input`
      padding: 10px;
      width: 300px;
    `
    let Button = styled.button`
      padding: 5px;
      width: 100px;
    `
    const [value, setValue] = useState(null)

    let onChageHandler = (e) => {
        setValue(e.target.value)
    }
    // let onSubmitHandle = () => {
    //     if (value < 0) {
    //         alert('please enter positive value for postion of ball')
    //     }
    //     setValue(null)
    // }

    // console.log(ballData

    const ballData = useSelector(state => state.balls)
    const divBallData = useSelector(state => state.divBalls)
    const dispatch = useDispatch();

    const handleBallClick = () => {

        let id = value;
        console.log(id)
        let payload2 = [...divBallData];

        let payload1 = ballData.filter(item => {
            if (item.position != id) {
                return item;
            }
            else {
                payload2.push(item);
            }
        })
        dispatch(ballState(payload1))
        dispatch(divBallsState(payload2));

        // console.log(payload1, payload2)
    }

    console.log(ballData)
    console.log(divBallData)

    return (
        <div>
            <Input type="number" value={value} onChange={onChageHandler} placeholder='Enter Positon of Ball' /> <br /><br />
            <Button type="submit" onClick={handleBallClick} value={"Shoot"} > SHOOT </Button>
        </div>
    )
}

export default TextInput