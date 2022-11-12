import {useState, useEffect} from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Form from './components/Form';




function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)




  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers :{
        'Content-type': 'application/json', 
        'Authorization': 'Token 07c186eb5c1f3b5654e4e58a931f0378b7b3a4c6'

      }
    })
    .then(response => response.json())
    .then(response => setArticles(response))
    .catch(error => console.log(error))


  }, []) 

  const editBtn = (article) => {
    setEditArticle(article)

  }

  const deleteBtn = (article) => {
    const new_article = articles.filter(myarticle => {
      if(myarticle.id === article.id) {
        return false
      }
      else {
        return true
      }
    })
    setArticles(new_article)

  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
       if (myarticle.id === article.id) {
        return article;
       }
       else {
        return myarticle;
       }
    })
    setArticles(new_article)

  }
  const newInformation = (article) => {
    const new_article = [...articles, article]
    setArticles(new_article)
  }

  const articleForm = () => {
    setEditArticle({title: '' , description: ''})
  }

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
          <h1 className='title '>Django and Reactjs Blog App</h1>
          
          
        </div>
        <br/>
        <br/>
        <div className='col '>
          <button className='btn btn-primary' onClick={articleForm}>Add artcle</button>
          
        </div>

        
      </div>

      <div className='mt-5'>
      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/>

        {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} newInformation={newInformation}/> : null
        }
        
        
      </div>

      
      
      
      
    </div>
  );
}

export default App;
