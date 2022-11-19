import React from 'react'
import {useState, useEffect} from 'react';
import '../App.css';
import ArticleList from '../components/ArticleList';
import Form from '../components/Form';
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




function Home() {
   
    
    const [articles, setArticles] = useState([])
    const [editArticle, setEditArticle] = useState(null)
    const navigate = useNavigate();

    const [token, setToken, removeToken] = useCookies(['mytoken'])


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/articles/', {
          'method': 'GET',
          headers :{
            'Content-type': 'application/json', 
            'Authorization': `Token ${token['mytoken']}`
    
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
    
    const logoutBtn = () => {
        removeToken(['mytoken'])
        navigate('/')
        
    }

  return (
    <div >
        <Navbar logoutBtn={logoutBtn}/>
        

    <div className='container m-4'>
    <div className='row '>
        <div className='col-8 text-start'>
          <h1 className='title'>Django and Reactjs Article app</h1>
          
          
        </div>
        <div className='col-4 text-end'>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon onClick={articleForm}/>
            </Fab>
            
        </Box>
            
        </div>
        <br/>
        <br/>
        <div className='col '>
          
          
        </div>
        

        
      </div>

      <div className='mt-5'>
      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/>

        {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} newInformation={newInformation}/> : null
        }
        
        
      </div>
    </div>
        
    </div>
  )
}

export default Home