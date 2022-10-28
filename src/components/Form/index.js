import './Form.css'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import BotaoCard from '../botãoCard'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, SetCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        SetCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => SetCargo(valor)}
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={props.times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <BotaoCard>Criar card</BotaoCard>
            </form>
        </section>


    )
}

export default Form