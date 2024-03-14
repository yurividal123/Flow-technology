import { DivButtonCarrossel, DivCard, DivCourse, DivPrincipal, DivSection, DivSectionCardImg, DivSectionCardPrincipal, DivSectionContainer, DivSectionMainOne, MAinDiv, MAinDivArea1, MAinDivArea2, MAinDivContainer, MainDivCard, MainDivCardH2H3, SectionCard, SectionCardContainer, SectionOne, SectionTwo } from "./styled"
import logo from '../../assets/Foto+Recorde_hero.png'
import logos from '../../assets/Pilulas hero.png'
import logoos from '../../assets/Access time.png'
import logobutton1 from '../../assets/Arrow back ios.png'
import logobutton2 from '../../assets/Arrow back ios (1).png'
import logoimg from   '../../assets/Ilustração.png'

export const Section = () => {
return (
<>
<DivSection>
        <DivSectionContainer>
        <SectionOne>
            <DivSectionMainOne>
            <h1>Pós-Graduação EAD <br/>
            <span>Transforme a sua carreira na IECI</span></h1>
            </DivSectionMainOne>
            <img src={logo} />
        </SectionOne>
        <SectionTwo>
            <div>
                <h2>Veja as nossas áreas</h2>
            </div>
            <img src={logos} alt="" />
        </SectionTwo>
        </DivSectionContainer>
        <DivPrincipal>
        <DivCourse>
            <div>
        <h1>Cursos Populares<br/></h1>
            </div>
        <span>Programas com conteúdo em formato de videoaulas
com acesso facilitado. IECI é a melhor forma para
você se destacar no mercado de trabalho.</span>
        </DivCourse>
        <SectionCardContainer>
            <SectionCard>
                <h3 className="cardh3">Administração publica</h3>
                <h2>Administração Escolar e Inspeção Escolar</h2>
                <DivSectionCardPrincipal>
                    <DivSectionCardImg>
                        <img src={logoos} alt="" />
                        <h3>620 Horas</h3>
                    </DivSectionCardImg>
                    <button type="submit">Inscrever-se</button>
                </DivSectionCardPrincipal>
            </SectionCard>
            <SectionCard>
                <h3 className="cardh3">Administração publica</h3>
                <h2>Aministração Escolar e Inspeção Escolar</h2>
                <DivSectionCardPrincipal>
                    <DivSectionCardImg>
                        <div>
                        <img src={logoos} alt="" />
                        </div>
                        <h3>620 Horas</h3>
                    </DivSectionCardImg>
                    <button type="submit">Inscrever-se</button>
                </DivSectionCardPrincipal>
            </SectionCard>
            <SectionCard>
                <h3 className="cardh3">Administração publica</h3>
                <h2>aministração Escolar e Inspeção Escolar</h2>
                <DivSectionCardPrincipal>
                    <DivSectionCardImg>
                        <img src={logoos} alt="" />
                        <h3>620 Horas</h3>
                    </DivSectionCardImg>
                    <button type="submit">Inscrever-se</button>
                </DivSectionCardPrincipal>
            </SectionCard>
        </SectionCardContainer>
        </DivPrincipal>
        <DivButtonCarrossel>
            <button type="submit"><img src={logobutton1} alt="" /></button>
            <button type="submit"><img src={logobutton2} alt="" /></button>
        </DivButtonCarrossel>
    </DivSection>
    <MAinDiv>
        <MAinDivContainer>
            <MAinDivArea1>
                <div className="Card1">
                <h1>Áreas mais<br/> Procuradas</h1>
                <p>Programas com conteúdo em<br/>
                    formato de videoaulas com<br/>
                    acesso facilitado. IECI é a<br/>
                    melhor forma para você se<br/>
                    destacar no mercado de<br/>
                    trabalho.</p>
                </div>
                <button type="submit">Ver todas as áreas</button>
            </MAinDivArea1>
            <DivCard>
            <MAinDivArea2>
                <MainDivCard>
                    <MainDivCardH2H3>
                    <h2>Farmácia</h2>
                    <h3>9 Cursos</h3>
                    </MainDivCardH2H3>
                    <button type="submit">Ver cursos</button>
                </MainDivCard>
                <img src={logoimg} alt="" />
            </MAinDivArea2>
            <MAinDivArea2>
                <MainDivCard>
                    <MainDivCardH2H3>
                    <h2>Farmácia</h2>
                    <h3>9 Cursos</h3>
                    </MainDivCardH2H3>
                    <button type="submit">Ver cursos</button>
                </MainDivCard>
                <img src={logoimg} alt="" />
            </MAinDivArea2>
            <MAinDivArea2>
                <MainDivCard>
                    <MainDivCardH2H3>
                    <h2>Farmácia</h2>
                    <h3>9 Cursos</h3>
                    </MainDivCardH2H3>
                    <button type="submit">Ver cursos</button>
                </MainDivCard>
                <img src={logoimg} alt="" />
            </MAinDivArea2>
            <MAinDivArea2>
                <MainDivCard>
                    <MainDivCardH2H3>
                    <h2>Farmácia</h2>
                    <h3>9 Cursos</h3>
                    </MainDivCardH2H3>
                    <button type="submit">Ver cursos</button>
                </MainDivCard>
                <img src={logoimg} alt="" />
            </MAinDivArea2>
            <MAinDivArea2>
                <MainDivCard>
                    <MainDivCardH2H3>
                    <h2>Farmácia</h2>
                    <h3>9 Cursos</h3>
                    </MainDivCardH2H3>
                    <button type="submit">Ver cursos</button>
                </MainDivCard>
                <img src={logoimg} alt="" />
            </MAinDivArea2>
            <MAinDivArea2>
                <MainDivCard>
                    <MainDivCardH2H3>
                    <h2>Farmácia</h2>
                    <h3>9 Cursos</h3>
                    </MainDivCardH2H3>
                    <button type="submit">Ver cursos</button>
                </MainDivCard>
                <img src={logoimg} alt="" />
            </MAinDivArea2>
            </DivCard>
        </MAinDivContainer>
    </MAinDiv>
</>
)
}
