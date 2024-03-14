import { DivHeader, DivHeaderH2, DivHeaderMain, HeaderItens, HeaderList } from './styled'
import logo from '../../assets/tl 1.png'

export const Header = () => {

return (
    <DivHeader>
        <DivHeaderMain>
            <img className='header-img' src={logo} alt="" />
        <HeaderItens>
            <HeaderList>
            <h2>CURSOS</h2>
            <h2>CONTATO</h2>
            </HeaderList>
            <DivHeaderH2>
                ENTRAR
            </DivHeaderH2>
        </HeaderItens>
        </DivHeaderMain>
    </DivHeader>
)
}

