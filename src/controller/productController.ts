import ProductModel from "../model/productModel";

class ProductController{

    image: any=null;
    productDetails:string='';
    price:any= 0.0;
    isDrop_shipping:boolean = false;
    private productModel: ProductModel;

    constructor(productModel:ProductModel) {
        this.productModel=productModel
    }
    setImage=(image:any)=>{
        this.productModel.setImage(image);

    }
    setIsDropable=(isDrop:boolean)=>{
        this.productModel.setIsDropable(isDrop);

    }

    setProductId=(productId:any) :any =>{

        return this.productModel.setProductId(productId);
    }

    setProductCart=(productList:any)=>{

        this.productModel.setProductCart(productList);

    }
    setProductDetails=(productDetails:string)=>{
        this.productModel.setProductDetails(productDetails);

    }

    setPrice=(price:any)=>{
        this.productModel.setPrice(price);

    }

}

export default ProductController
