import express from "express"

const app=express()

const port=4000;

app.get("/api/products",(req,res)=>{
    const products = [
        {
          id: 1,
          name: "Wireless Headphones",
          price: 59.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
          category: "Electronics"
        },
        {
          id: 2,
          name: "Running Shoes",
          price: 89.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
          category: "Footwear"
        },
        {
          id: 3,
          name: "Smart Watch",
          price: 129.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
          category: "Electronics"
        },
        {
          id: 4,
          name: "Leather Wallet",
          price: 29.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
          category: "Accessories"
        },
        {
          id: 5,
          name: "Backpack",
          price: 49.99,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOCzaEM17rj4LhXRx3nOezr76b-3BZ_WN_A&s",
          category: "Bags"
        }
    ];

    if(req.query.search){
        const filterProducts=products.filter(product=>product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
      
})

app.listen(port,()=>{
    console.log("server is running on port 4000")
})