import logobutton2 from '../../assets/Arrow back ios (1).png'
import logobutton1 from '../../assets/Arrow back ios.png'
import logofeef from '../../assets/Frame.png'
import {  MainCarrosel, MainDiv, MainDivCard, MainDivCards, MainDivContainer, MainDivFeddback, MainText } from "./styled"

export const Main = () => {
return (
    <MainDiv>
        <MainDivFeddback>
            <h1>Feedbacks</h1>
            <h2>O que nossos alunos tem a dizer?</h2>
        </MainDivFeddback>
        <MainDivContainer>
        <MainDivCards>
            <MainDivCard>
                <img src={logofeef}  />
                <MainText>
                <h2>Caio castro</h2>
                <p>Caio Castro
                “Impressionado com a<br/>
                praticidade que tive de<br/>
                encontrar e comprar o<br/>
                curso que eu procurava”.</p>
                </MainText>
            </MainDivCard>
        </MainDivCards>
        <MainDivCards>
            <MainDivCard>
                <img src={logofeef}  />
                <MainText>
                <h2>Caio castro</h2>
                <p>Caio Castro
                “Impressionado com a<br/>
                praticidade que tive de<br/>
                encontrar e comprar o<br/>
                curso que eu procurava”.</p>
                </MainText>
            </MainDivCard>
        </MainDivCards>
        <MainDivCards>
            <MainDivCard>
                <img src={logofeef}  />
                <MainText>
                <h2>Caio castro</h2>
                <p>Caio Castro
                “Impressionado com a<br/>
                praticidade que tive de<br/>
                encontrar e comprar o<br/>
                curso que eu procurava”.</p>
                </MainText>
            </MainDivCard>
        </MainDivCards>
        </MainDivContainer>
        <MainCarrosel>
            <button type="submit"><img src={logobutton1} alt="" /></button>
            <button type="submit"><img src={logobutton2} alt="" /></button>
        </MainCarrosel>
    </MainDiv>
)
}
