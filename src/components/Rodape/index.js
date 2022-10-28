import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <ul>
                <li>
                    <a href="facebook.com" target='_blank'>
                        <img src="images/fb.png" alt="imagem link facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target='_blank'>
                        <img src="images/tw.png" alt="imagem link twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target='_blank'>
                        <img src="images/ig.png" alt="imagem link instagram" />
                    </a>
                </li>
            </ul>
            <img src="images/logo.png" alt="imagem logo organo" />
            <h5>Desenvolvido por Alura</h5>
        </footer>
    )
}

export default Rodape