

export default class APIService {
    static async UpdateArticle(article_id , body) {
        const resp = await fetch(`http://127.0.0.1:8000/api/articles/${article_id}/ `, {
            'method': 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Token 07c186eb5c1f3b5654e4e58a931f0378b7b3a4c6'
            },
            body: JSON.stringify(body)
        });
        return await resp.json();
    }

    static async InsertArticle(body) {
        const response = await fetch('http://127.0.0.1:8000/api/articles/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Token 07c186eb5c1f3b5654e4e58a931f0378b7b3a4c6'
            },
            body: JSON.stringify(body)
        });
        return await response.json();
        
    }

    static  DeleteArticle(article_id) {
        return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Token 07c186eb5c1f3b5654e4e58a931f0378b7b3a4c6'
            },
            
        })
        

    }
}