import styled from "styled-components"; 


export const FooterContainer = styled.div`

  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

`

export const FooterBox = styled.div`
  margin: 0;
  padding: 0;
background-color: #333;
height: 16em;
display: flex;
flex-direction: row;
justify-content: center;
font-size: 1.2em;
gap: 8em;

`;

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;

`;

export const FooterLink = styled.a`
color: #fff;
text-decoration: none;
padding-top: 0.4em;
&:hover {
color:purple;
}
`;

export const Heading = styled.p`
 font-size: 1.4em;
 color: #bfbfbf;
 text-align: center;
 `;

 export const FooterLow = styled.div`
 background-color: #222;
 height: auto;
 display: flex;
 flex-direction: row;
 gap: 1em;
 justify-content: center;
 color: #bfbfbf;
 
 `;
