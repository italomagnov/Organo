import Card from '../card'
import './Time.css'

const Time = (props) => {

    const cssBackground = {
        backgroundColor: props.corSecundaria,
    }
    const cssBottomLine = {
        borderColor: props.corPrimaria,
    }

    return (
        props.colaboradores.length > 0 && <section className='time' style={cssBackground}>
            <h3 style={cssBottomLine}>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map(colaborador => 
                    <Card 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        time={colaborador.time}
                />)}
            </div>
            
        </section>
    )
}

export default Time