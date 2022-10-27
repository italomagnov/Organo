import './BotaoCard.css'

const BotaoCard = (props) => {
    return(
        <button className='btn-create-card'>
           {props.children}
        </button>
    )
}
 
export default BotaoCard