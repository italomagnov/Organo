import './Form.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import BotaoCard from '../BotãoCard'

const Form = () => {

    const times = [
        'Programação',
        'Front End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('form foi submetido');
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto obrigatorio={true} label='Cargo' placeholder='Digite sua classe' />
                <CampoTexto label='Imagem' placeholder='Informe o endereço da imagem' />
                <ListaSuspensa obrigatorio={true} label='Time' itens={times} />
                <BotaoCard>Criar card</BotaoCard>
            </form>
        </section>


    )
}

export default Form