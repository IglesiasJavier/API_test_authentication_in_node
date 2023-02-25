import Product from "../models/Product"


export const index = async (req, res) => { 
    const products = await Product.find();
    res.json(products);
}

export const store = async (req, res) => {
    const {name,category,price,imgURL} = req.body;
    const newProduct = new Product({name,category,price,imgURL});
    const productSaved = await newProduct.save();
    res.status(201).json(productSaved);
}

export const show = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product);
}

export const update = (req, res) => {
    
}

export const del = (req, res) => {

}
