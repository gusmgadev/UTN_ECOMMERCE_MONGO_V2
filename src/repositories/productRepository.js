import Product from "../models/product.model.js";

// para manejar el acceso a la base de datos
//comunica la base de datos con mi aplicacion , es una capa logica. Si cambio de base de datos, puedo migrar facilmente
class ProductRepository{
    static async getProducts(){
        //obtengo todos los productos activos
        return Product.find({active: true})
    }
    static async getProductById(id){
        //return Product.findOne({id})
        return Product.findById(id)
    }

    static async createProduct(product_data){
        const product = new Product(product_data)
        return await product.save()
    }   

    static async updateProduct(id, product_data){
    
        return await Product.findByIdAndUpdate(id, product_data, {new: true}) // new true nos permite devolver el producto modiificado
    }
    
    static async deleteProduct(id){
        // no lo borra, sino lo marca como inactivo
        return await Product.findByIdAndUpdate(id, {active: false}, {new: true})

    }
}

export default ProductRepository