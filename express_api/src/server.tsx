import 'dotenv/config';

import express from 'express';
import { test_run, connect } from './db/connector';
import { movieModel, studentModel } from './db/schemas'

const app = express();
const port = 3000

const mongoose = connect();

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

app.get('/api/students')

app.get('/movies', async (req,res)=>{
    const query = movieModel.findOne().lean();
    //query.where('poster').ne(null);

    // await produces the result
    // perform all actions before the await
    const result = await query.exec();

    return res.json(result);
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

const server = app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

const shutdown = async () => {
  try
  {
    await mongoose.disconnect()
    console.log('Disconnected from db.')
    server.close(() => {    
        console.log('HTTP server closed')
    })
  }
  catch (err)
  {
    console.error('Error during Mongoose connection closure:', err);
    process.exit(1);
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);