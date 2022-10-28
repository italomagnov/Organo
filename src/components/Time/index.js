import './Time.css'

const Time = (props) => {

    const cssBackground = {
        backgroundColor: props.corSecundaria,
    }
    const cssBottomLine = {
        borderColor: props.corPrimaria,
    }

    return (
        <section className='time' style={cssBackground}>
            <h3 style={cssBottomLine}>{props.nome}</h3>
        </section>
    )
}

export default Time