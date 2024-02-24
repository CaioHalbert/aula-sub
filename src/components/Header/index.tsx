import './style.css';

const Header = ({Titulo}:{Titulo:string}) => {
    return(
        <header className='header'>
            <h1>{Titulo}</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contatos</a></li>
                    <li><a href="#">Quem somos</a></li>
                    <li><a href="#">Perfil</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header