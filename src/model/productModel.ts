class ProductModel {
   private image:number=0;
   private productDetails:string='';
   private price :string='';
   private isDrop_shipping:boolean = false;
   private productCart=[{}];
    private productId=0;
    setProductCart=(productCart:[{}])=>{
        this.productCart.push(productCart);

    }
    getProductCart=()=>{

        return this.productCart
    }
    setImage=(image:number)=>{
        this.image=image;

    }
    setProductId= (productId=0)=>{

        this.productId=productId;
    }
    getProductId=()=>{
      return   this.productId;

    }
     getImage=()=>{
        return this.image
    }
    setProductDetails=(productDetails:string)=>{
        this.productDetails=productDetails;

    }
    getProductDetails=() :string =>{
        return this.productDetails
    }
    setPrice=(price:string)=>{
        this.price=price;

    }
    getPrice=() =>{
        return this.price
    }
    setIsDropable=(isDrop:boolean)=>{
        this.isDrop_shipping=isDrop;

    }
    getIsDropable=() :boolean=>{
        return this.isDrop_shipping;
    }

}

export default ProductModel
