import React from 'react'

function RecipeTitle(props) {
  const className = props.isClassTitle ? 'title' : 'normal'
  const rating = props.rating >= 4 ? 'Good' : 'Bad'
  const numArray =  props.numbers ? props.numbers : []

  return (
    <div>
      <h1 className={className}>{props.title}</h1>
      <h3>{rating} {props.rating}</h3>
      {numArray.map(num => {
        if(num > 20){
          return <div className='title' >Mayor a 20: {num}</div>
        }else {
          return <div>Menores de 20: {num}</div>
        }
        
      })}
    </div>
  )
}

export default RecipeTitle;