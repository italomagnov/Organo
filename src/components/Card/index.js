import './Card.css'

const Card = ({ nome, cargo, imagem }) => {
    return (
        <div className='card-colaborador'>
            <div className='card-colaborador__cabecalho'>
                <img src={imagem} alt={nome} />
            </div>
            <div className='card-colaborador__rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Card