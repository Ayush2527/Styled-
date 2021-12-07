import React from "react";
import styled from 'styled-components';

const Holder = styled.section`
display: flex;
justify-content:flex-end;

`
const Slider = styled.span`
position: absolute;
cursor: pointer;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #ccc;
transition: 0.4s;
border-radius: 34px;
&:before{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
}
`

const  SwitchLabel = styled.label`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
margin-top: 10px;
> input{
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
        background-color:#2196f3;
        &:before{
            transform:translateX(26px);
        }
    }
}


`



const Switch = (props) => {
    return (
        <Holder>
            <SwitchLabel>
                <input type="checkbox" value={props.isDarkMode} onChange={props.onChange } />
                <Slider/>
            </SwitchLabel>
        </Holder>
    )
}

export default Switch;