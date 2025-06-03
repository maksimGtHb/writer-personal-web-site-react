import styled from 'styled-components'

export const Side = styled.div`

background-color: rgb(206, 128, 206);
position: fixed;

padding: 1em;
color: white;
overflow-y: auto;
top: 40%;
border-radius: 0 1em 1em 0;
box-shadow: 2px 0 10px rgba(0,0,0,0.2);
z-index: 2;

`;

export const Point = styled.a`
 
 font-size: 1.8em;
 
 display: flex;
 cursor: pointer;
 padding: 0.1em;

 &:hover{ 
 background-color: white;
 color: rgb(206, 128, 206);}

`
export const Toggle = styled.button`

background-color: rgb(206, 128, 206);
color: white;
position: fixed;
z-index: 3;
top: 38%;
font-size: 1.4em;



padding: 0.2em;

border-radius: 0 0.2em 0.2em 0;
border: none;
 &:hover{
 background-color: #333;
 color: rgb(206, 128, 206);
 }
`
