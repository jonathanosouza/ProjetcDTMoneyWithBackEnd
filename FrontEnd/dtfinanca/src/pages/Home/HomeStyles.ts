import styled from "styled-components";


export const Container =styled.div `
width: 1120px;
margin: 0 auto;
display: flex;
justify-content: space-between;
flex-direction: column;
`

export const DashContainer = styled.div `
display: flex;
gap: 4rem;
align-items: center;
justify-content: center;
margin-top: -1rem;
width: 100%;
height: 4rem;


`

export const DashInPut = styled.div `
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: space-around;
padding: 2rem;
background: white;
width: 352px;
height: 136px;
left: 160px;
top: 144px;
border-radius: 5px;

header{
  display: flex;
  width: 100%;
  justify-content:space-between;
  align-items: center;
  font-size:1rem;
  font-weight: 400;
  font-family: 'Poppins';
  color: ${(props) => props.theme['blue-dark']};

  
}


strong {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 54px;
color: ${(props) => props.theme['blue-dark']};

}
`


export const DashOutPut = styled.div `
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: space-around;
padding: 2rem;
background: white;
width: 352px;
height: 136px;
left: 160px;
top: 144px;
border-radius: 5px;

header{
  display: flex;
  width: 100%;
  justify-content:space-between;
  align-items: center;
  font-size:1rem;
  font-weight: 400;
  font-family: 'Poppins';
  color: ${(props) => props.theme['blue-dark']};
}

strong {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 54px;
color: ${(props) => props.theme['blue-dark']};

}
`


export const DashTotal = styled.div `
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content: space-around;
padding: 2rem;
background: white;
width: 352px;
height: 136px;
left: 160px;
top: 144px;
border-radius: 5px;
background: ${(props) => props.theme['green-300']};
color: ${(props) => props.theme['white']};



header{
  display: flex;
  width: 100%;
  justify-content:space-between;
  align-items: center;
  font-size:1rem;
  font-weight: 400;
  font-family: 'Poppins';
  color: ${(props) => props.theme['white']};

}

strong {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 54px;
color: ${(props) => props.theme['white']};

}
`