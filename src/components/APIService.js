

export default class APIService {
    

    static async UpdateArticle(article_id , body, token) {
        const resp = await fetch(`http://127.0.0.1:8000/api/articles/${article_id}/ `, {
            'method': 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${token}` 
            },
            body: JSON.stringify(body)
        });
        return await resp.json();
    }

    static async InsertArticle(body, token) {
        const response = await fetch('http://127.0.0.1:8000/api/articles/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
        });
        return await response.json();
        
    }

    static  DeleteArticle(article_id, token) {
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${token}`
            },
            
        })
        

    }
    static async LoginUser(body) {
        const response = await fetch('http://127.0.0.1:8000/auth/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await response.json();

        
        
    }

    static async RegisterUser(body) {
        const response = await fetch('http://127.0.0.1:8000/api/users/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        return await response.json();

        
        
    }
}