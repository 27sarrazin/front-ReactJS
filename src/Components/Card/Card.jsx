import './Card.css'

export default function Card(){ //minha funcao esta sendo importada
    return (
        <div className='card'> 
        <h2>Rick Sanche</h2>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
      </div>
    )
}