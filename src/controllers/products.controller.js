import Product from "../models/Product"


export const index = (req, res) => { 
    
}

export const store = async (req, res) => {
    const {name,category,price,imgURL} = req.body;
    const newProduct = new Product({name,category,price,imgURL});
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
}

export const show = (req, res) => {
    
}

export const update = (req, res) => {
    
}

export const del = (req, res) => {

}
