import ProductModel from "../model/productModel";

class ProductController{


    private productModel: ProductModel;

    constructor(productModel:ProductModel) {
        this.productModel=productModel
    }
    setImage=(image:number)=>{
        this.productModel.setImage(image);

    }
    setIsDropable=(isDrop:boolean)=>{
        this.productModel.setIsDropable(isDrop);

    }

    setProductId=(productId:number)=>{

         this.productModel.setProductId(productId);
    }

    setProductCart= (productList: { image: number; price: string; index: number; productDetails: string })=>{

        this.productModel.setProductCart(productList);

    }
    setProductDetails=(productDetails:string)=>{
        this.productModel.setProductDetails(productDetails);

    }

    setPrice=(price:string)=>{
        this.productModel.setPrice(price);

    }

}

export default ProductController
