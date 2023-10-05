import './Card.css'
//em manutencao
export default function Card(props){ //minha funcao esta sendo importada
    //console.log(props);
    const item = props.item;

    return (
        <div className="card"> 
        <h2>{item.nome}</h2>
        <div className='tags-list'>
            <div className='tag'>texto qualquer</div>
            <div className='tag'>texto qualquer</div>
            <div className='tag'>texto qualquer</div>
           
        </div>
        <img src={item.imageUrl} alt="Rick"/>
      </div>
    )
}