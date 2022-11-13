import React from 'react'
import APIService from './APIService'
import {useCookies} from 'react-cookie'


function ArticleList(props) {
  const [token] = useCookies(['mytoken'])
    const editBtn = (article) => {
        props.editBtn(article)
    }
    const deleteBtn = (article) => {
        APIService.DeleteArticle(article.id, token['mytoken'])
        .then(() => props.deleteBtn(article))
        .catch(error => console.log(error))
        
    }
  return (
    <div className=''>
        {props.articles && props.articles.map(article => {
        return (
          <div key={article.id}>
        <h3>{article.title}</h3>
        <p >{article.description}</p>

        <div className='row'>
            <div className='col-2'>
                <button className='btn btn-primary' onClick={() =>editBtn(article)}>Update</button>
                
            </div>
            <div className='col-2'>
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
