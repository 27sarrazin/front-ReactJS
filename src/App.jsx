import './App.css'
import Card from './Components/Card/Card'

function App() {
 const personagem1 = {
    nome: 'Rick Sanches',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    
 }
 const personagem2 = {
  nome: 'Morty',
  imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    
 }
//criacao de array
//vamos percorrer a lista inteira
const personagens = [
  personagem1, personagem2
]




//aqui vamos escrever nosso codigo
  return ( //por baixo do panos isso é javaScript
  
    <>
    <div className='container'>
        {personagens.map(function (personagem){ //a gente transforma cada item dessa lista em algo(texto etc.)
        return <Card  item={personagem} />
      })}
    </div>
     
    </>
    //chamando o componente Card
  )
}

export default App
