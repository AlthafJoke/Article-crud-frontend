import React from 'react'
import APIService from './APIService'


function ArticleList(props) {
    const editBtn = (article) => {
        props.editBtn(article)
    }
    const deleteBtn = (article) => {
        APIService.DeleteArticle(article.id)
        .then(() => props.deleteBtn(article))
        .catch(error => console.log(error))
        
    }
  return (
    <div>
        {props.articles && props.articles.map(article => {
        return (
          <div key={article.id}>
        <h3>{article.title}</h3>
        <p >{article.description}</p>

        <div className='row'>
            <div className='col-1'>
                <button className='btn btn-primary' onClick={() =>editBtn(article)}>Update</button>
                
            </div>
            <div className='col-1 '>
                <button onClick={() => deleteBtn(article)} className='btn btn-danger'>Delete</button>
                
            </div>
            
        </div>
        <hr className='hrclass'/>

            
          </div>
        )
      })}
      
    </div>
  )
}

export default ArticleList
