import { createContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";


const ShoopingCartContext = createContext();

const  ShoopingCartProvider = ({children}) =>{
    let [count,setCount] = useState(0)
    const [visibleProductDetail,setVisibleProductDetail] = useState(false);
    const [visibleCartDetail,setVisibleCartDetail] = useState(false);
    const [productDetail,setProductDetail] = useState({});
    const [cartProducts,setCartProducts] = useState([]);
    const [order,setOrder] = useState([]);
    const [items, setItems] = useState([]);
    const [searchTitle, setSearchTitle] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [category, setCategory] = useState([]);
    

    useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(data => {
            setCategory(data)
        })
        
    },[]);


    
    
    useEffect(()=>{
        console.log("Success",searchCategory)
        if(searchCategory !="" ){
            fetch('https://fakestoreapi.com/products/category/'+searchCategory)
            .then(response => response.json())
            .then(data => {
                
                setItems(data)
                
            })
        }
        else{
            fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                
                setItems(data)
                
            })
        }
    },[searchCategory])
    

    
    
    
    

   


    const openDetailProductAndData = (data) =>{
        setVisibleProductDetail(true);
        setProductDetail(data);
    }
    const closeDetailProduct = () =>{
        setVisibleProductDetail(false);
        setProductDetail({});
    }

    const openCartDetail = () =>{
        console.log("abierto");
        setVisibleCartDetail(true);
    }
    const closeCartDetail = () =>{
        setVisibleCartDetail(false);
    }


    const handleDeleteProductCart = (id) =>{
        const products = [...cartProducts]
        products.map((product,index) =>{
            if(product.id === id){
                product.count--;
                if(product.count === 0){
                    products.splice(index,1)
                }
            }
        } );
        setCartProducts(products);
    }

    const sumCountProductCart = (id) =>{
        const products = [...cartProducts]
        products.map((product,index) =>{
            if(product.id === id){
                product.count++;
            }
        } );
        setCartProducts(products);
    }

    

    const addProductsToCart = (productData) =>{
        console.log("get",getProductsToCart([...cartProducts,productData]));
        setCartProducts(getProductsToCart([...cartProducts,productData]));
    }

    const addOrder = (orderData) =>{
        setOrder([...order,orderData]);
    }


    const getProductsToCart = (products) =>{
        const uniqueProducts = products.reduce((accumulator, product) => {
            const existingProduct = accumulator.find(item => item.id === product.id);
          
            if (existingProduct) {
              existingProduct.count ++;
            } else {
              accumulator.push({ id: product.id, count: product.count?product.count:1,image:product.image,price: product.price,title:product.title});
            }
          
            return accumulator;
          }, []);
          return uniqueProducts;
    }


    const initializeCart = () => {
        setCount(0);
        setCartProducts([]);
    };
   
    //console.log("productstocart",cartProducts);


    return ( 
        <ShoopingCartContext.Provider 
            value={
                {
                    count,
                    setCount,
                    setVisibleProductDetail,
                    visibleProductDetail,
                    productDetail,
                    setProductDetail,
                    addProductsToCart,
                    visibleCartDetail,
                    openDetailProductAndData,
                    closeDetailProduct,
                    openCartDetail,
                    closeCartDetail,
                    cartProducts,
                    handleDeleteProductCart,
                    sumCountProductCart,
                    order,
                    addOrder,
                    initializeCart,
                    searchTitle,
                    setSearchTitle,
                    items,
                    category,
                    setSearchCategory,
                    searchCategory
                }
            }>
            {children}
        </ShoopingCartContext.Provider>
        
    )
}

export { ShoopingCartProvider , ShoopingCartContext}
