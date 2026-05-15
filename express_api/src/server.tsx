import 'dotenv/config';

import express from 'express';
import run from './db/connector';

const app = express();
const port = 3000

let items = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
]

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.post('/', (req,res)=>{
    res.send('Huh I got a POST!')
})

app.get('/items', (req,res)=>{
    res.json(items)
})

app.get('/config', (req,res)=>{

})

app.get('/mong', (req,res)=>{
    run()
    res.json('Trust me but i just queried the db')
})

app.get('/items/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if(item) {
        res.json(item);
    } else {
        res.status(404).json({error: 'Item not found'});
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})