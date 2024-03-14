import styled from "styled-components";


export const MainDiv = styled.div`
background-color: #62498A;
`
export const MainCarrosel = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #62498A;
gap: 20px;

button {
    background-color: #62498A;
    border-radius: 50%;
    padding: 7px;
    border: solid 3px #EFDBFE;
    filter: drop-shadow(0px 0px 2px #D9BCE6);
    margin-top: 60px;
}
`

export const MainDivFeddback = styled.div`
margin-left: 60px;
margin-bottom: 150px;
h1 {
    color: #EFDBFE;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    margin: 0;
}

h2 {
    color: #C69EEE;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
}
`

export const MainDivContainer = styled.div`
max-width: 1800px;
margin: auto;
display: flex;
justify-content: center;
gap: 40px;
`

export const MainDivCards = styled.div`
`
export const MainDivCard = styled.div`
width: 400px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 50px 0px 50px;
background-color: #62498A;
border: solid 5px #EFDBFE;
filter: drop-shadow(0px 0px 5px #D9BCE6);
border-radius: 30%;


img {
    position: relative;
    width: 45px;
    height: 75px;
    border: solid 1px #965FC1;
    background-color: #965FC1;
    padding: 25px 28px 0px 28px;
    border-radius: 50%;
    bottom: 55px;
}


h2 {
    text-align: center;
    font-size: 24px;
    color: #EFDBFE;
    font-weight: 700;
    font-style: normal;
    margin: 0;
}
p {
    font-size: 24px;
    color: #EFDBFE;
    font-weight: 400;
    font-style: italic;
    text-align: center;
}

`

export const MainText = styled.div`
position: relative;
bottom: 40px;
`