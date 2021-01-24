class ProductModel {
   private image: any=null;
   private productDetails:string='';
   private price:any= 0.0;
   private isDrop_shipping:boolean = false;
   private productCart: any=[];
    private productId: any;
    setProductCart=(productCart:any)=>{
        this.productCart.push(productCart);

    }
    getProductCart=() :any =>{

        return this.productCart
    }
    setImage=(image:any)=>{
        this.image=image;

    }
    setProductId= (productId: boolean) :any =>{

        this.productId=productId;
    }
    getProductId=()=>{
      return   this.productId;

    }
     getImage=() :any =>{
        return this.image
    }
    setProductDetails=(productDetails:string)=>{
        this.productDetails=productDetails;

    }
    getProductDetails=() :string =>{
        return this.productDetails
    }
    setPrice=(price:any)=>{
        this.price=price;

    }
    getPrice=() :any =>{
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
