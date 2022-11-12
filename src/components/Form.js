import React, {useState, useEffect} from 'react'
import APIService from './APIService'

function Form(props) {
    const [title, setTitle] = useState(props.article.title)
    const [description, setDescription] = useState(props.article.description)

    useEffect(() => {
         setTitle(props.article.title)
         setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description})
        .then(response => props.updatedInformation(response))

    }
    const insertArticle = () => {
        APIService.InsertArticle({title, description})
        .then(response => props.newInformation(response))
    }

  return (
    <div>
      {props.article ? (
        <div className='mb-3'>
            <label htmlFor='title' className='form-label'>Title</label>
            <input type="text" className='form-control' id='title' placeholder='please enter the title' value={title}  onChange={e => setTitle(e.target.value)}/>

            <label htmlFor='title' className='form-label'>Description</label>
            <textarea type="text" className='form-control' id='description' placeholder='please enter the description' rows="5" value={description} onChange={e => setDescription(e.target.value)} />
            <br/>

            { props.article.id ? <button className='btn btn-success' onClick={updateArticle}>Update Article</button>:
            <button className='btn btn-success' onClick={insertArticle}>Add Article</button>
            }
            


        </div>
      ):null}
      {/* {props.article && props.article.title} */}
    </div>
  )
}

export default Form
