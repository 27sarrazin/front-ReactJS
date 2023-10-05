import './Card.css'

export default function Card(props){ //minha funcao esta sendo importada
    //console.log(props);
    const item = props.item;

    return (
        <div className="card"> 
        <h2>{item.nome}</h2>
        <img src={item.imageUrl} alt="Rick"/>
      </div>
    )
}