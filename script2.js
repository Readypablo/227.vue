


var app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        selectedVariant: 0,
        product:[
            {
                id:0,
                tov:"sock",
                name:"gray",
                link:"1.jpg",
                image:"1.jpg",
                inStock: true,
                brand: 'Vue Mastery',
                onSale: true,
                variants: [
                    {
                      variantId: 0,
                      variantColor: "blue",
                      variantImage: "2.jpg"    
                    } ,
                     {
                        variantId: 1,
                        variantColor: "gray",
                        variantImage: "1.jpg" 
                      },]
            },
            {
                id:1,
                tov:"sock",
                name:"blue",
                link:"2.jpg",
                image:"2.jpg",
                inStock: false,
                brand: 'PRADA',
                onSale: true,
                variants: [
                    {
                        variantId: 0,
                        variantColor: "blue",
                        variantImage: "2.jpg"    
                      } ,
                       {
                          variantId: 1,
                          variantColor: "gray",
                          variantImage: "1.jpg" 
                        },]
            },
            {
                id:2,
                tov:"sock",
                name:"green",
                link:"3.jpg",
                image:"3.jpg",
                inStock: true,
                brand: 'Pumba',
                onSale: false,
                variants: [
                    {
                        variantId: 0,
                        variantColor: "blue",
                        variantImage: "2.jpg"    
                      } ,
                       {
                          variantId: 1,
                          variantColor: "gray",
                          variantImage: "1.jpg" 
                        },]
       
            }
        ],

        sizes:[
            {
                id:0,
                razmer: 'S',
            },
            {
                id:1,
                razmer: 'M', 
            },
            {
                id:2,
                razmer: 'L',
            },
            {
                id:3,
                razmer: 'XL', 
            },
            {
                id:4,
                razmer: 'XXL',
            },
            {
                id:5,
                razmer: 'XXXL',
            },
           
           
            

            
        ]


     
     


    },
    methods: {
        addToCart() {
          this.cart += 1
        },
        minToCart() {
            if(this.cart >0){
                this.cart -= 1
            }
          },
          
          updateProduct(variantImage,id) {
            this.product[id].image = variantImage
          },
        
          
      },
      computed: {
        titl() {
            return this.product.map(one =>{
                return{
                    ...one,
                   title: one.brand + ' ' + one.tov,
                }
            })
        
        },
        sale(){
            return this.product.map(one =>{
                return{
                    ...one,
                     zxc: one.brand + ' ' + one.tov + ' are on sale!'
                }
                 
            })
    
        },


        nosale(){
            return this.product.map(one =>{
                return{
                    ...one,
                     cxz: one.brand + ' ' + one.tov + ' are not on  sale!'
                }
                 
            })
    
        }

      }

      
  
});

// app.product[id].inStock = false