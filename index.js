import express from 'express';
import userRoutes from './routes/users.js';  

const app = express();
const PORT = process.env.PORT||4000; 



app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log('testing');

    res.send('hello from me')
})

app.listen(PORT, () => console.log(`server running on port: http//localhost:${PORT}`));