import styled from "styled-components";

export const DivSection = styled.section`
background-color: #EFDBFE;
`

export const DivSectionContainer = styled.div`
position: relative;
width: 1800px;
display: flex;
margin: auto;
justify-content: space-between;
`

export const SectionOne = styled.div`
width: 100%;
height: 754px;
display: flex;
flex-direction: column;
margin-top: 80px;


h1 {
    font-size: 76px;
    font-weight: 700;
    color: #62498A;

    span {
        font-size: 24px;
        font-weight: 400;
        color: #62498A;
    }
}

img {
    width: 443px;
    height: 510px;
    position: absolute;
    top: 324px;
}
`
export const DivSectionMainOne = styled.div`
width: 700px;
height: 100px;
display: flex;
align-items: center;
line-height: 35px;
`



export const SectionTwo = styled.div`
width: 1400px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 116px;
margin-right: 50px;

h2 {
    font-size: 60px;
    font-weight: 700;
    color: #62498A;
}

img {
width: 800px;
height: 470px;
}
`

export const DivPrincipal = styled.div`
height: 700px;
margin-top: -20px;
margin: auto;
background-color: #F4EDFA;
padding-top: 88px;
`

export const SectionCardContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
`


export const SectionCard = styled.div`
width: 450px;
height: 280px;
display: flex;
flex-direction: column;
box-shadow: 0px 0px 20px 0px rgba(95, 95, 95, 0.25);
border-radius: 25px;
padding: 15px;

.cardh3 {
    text-align: center;
    width: 150px;
    font-size: 14px;
    font-weight: 400;
    border: solid 12px #965FC1;
    border-radius: 18px;
    color: #fff;
    background-color: #965FC1;
}

h2 {
    font-size: 28px;
    font-weight: 700;
    color: #62498A;
}
`

export const DivCourse = styled.div`
width: 500px;
padding-left: 50px;
margin-bottom: 60px;


h1 {
    font-size: 50px;
    font-weight: 700;
    color: #62498A;
}

span {
    font-size: 27px;
    font-weight: 400;
    color: #9f9f9f;
}
`

export const DivSectionCardImg = styled.div`
width: 130px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;

h3 {
    font-size: 20px;
    font-weight: 400;
    color: #965FC1;
    margin: 5px;
}


img {
    width: 40px;
}
`

export const DivSectionCardPrincipal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

button {
border-radius: 24px;
background: #62498A;
border: none;
font-size: 25px;
color: #fff;
padding: 12px 20px;
margin-right: 20px;
}
`

export const DivButtonCarrossel = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #F4EDFA;
gap: 20px;

button {
    background-color: #62498A;
    border-radius: 50%;
    border: none;
    padding: 10px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 1);
}
`

export const MAinDiv = styled.div`
width: 100%;
display: flex;
background-color: #F4EDFA;
`

export const MAinDivContainer = styled.div`
width: 1800px;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 150px;
margin-bottom: 60px;
`
export const MAinDivArea1 = styled.div`
width: 600px;
display: flex;
flex-direction: column;
padding-left: 40px;
padding-bottom: 180px;

h1 {
    font-size: 70px;
    font-weight: 700;
    font-style: normal;
    color: #62498A;
    margin: 0;
}

p {
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    color: #9F9F9F;
    margin: 0;
}

button {
    width: 200px;
    border-radius: 24px;
    border: solid 2px #6D42B5;
    padding: 10px 18px;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    color: #6D42B5;
    margin-top: 20px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 1);
}

.Card1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

`
export const MAinDivArea2 = styled.div`
display: flex;
background-color: #965FC1;
border-radius: 30px;
`
export const MainDivCard = styled.div`
width: 220px;
height: 200px;
display: flex;
flex-direction: column;
padding: 20px;


button {
    width: 170px;
    font-size: 23px;
    font-weight: 700;
    font-style: normal;
    border-radius: 24px;
    border: none;
    padding: 12px 16px;
    color: #965FC1;
    margin-top: 60px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 1);
}
`

export const MainDivCardH2H3 = styled.div`
line-height: 5px;

h2 {
    font-size: 35px;
    font-weight: 700;
    font-style: normal;
    color: #EFDBFE;
}

h3 {
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    color: #C69EEE;
}
`

export const DivCard = styled.div`
display: grid;
grid-template-columns: auto auto;
grid-gap: 20px;
`

