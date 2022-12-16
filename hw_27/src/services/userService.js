 const API = `https://61498bf2035b3600175ba32f.mockapi.io/users`;

 export const getUsers = () => fetch(API).then(data => data.json());

 export const getUser = id => fetch(API + `/${id}`).then(data => data.json());

 export const deleteUser = id => fetch(API + `/${id}`, {
     method: `DELETE`
 }).then(data => data.json());

 export const updateUser = (id, obj) => fetch(API + `/${id}`, {
     method: `PUT`,
     headers: {
         "Content-type": "application/json"
     },
     body: JSON.stringify(obj)
 }).then(data => data.json());

 export const addNewUser = (obj) => fetch(API, {
     method: `POST`,
     headers: {
         "Content-type": "application/json"
     },
     body: JSON.stringify(obj)
 }).then(data => data.json());