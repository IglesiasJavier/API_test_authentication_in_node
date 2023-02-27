import express from 'express';
import pkg from '../package.json'
import morgan from 'morgan';
import ProductRoutes from './routes/products.routes';
import AuthRoutes from './routes/auth.routes'

const app = express();

app.set('pkg',pkg);
app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
    })
});

app.use('/api/products',ProductRoutes); 
app.use('/api/auth',AuthRoutes); 

export default app; 