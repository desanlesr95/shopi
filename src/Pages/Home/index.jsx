import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { ProductDetail } from "../../Components/ProductDetail";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";
import { useContext, useEffect } from "react";
import { ShoopingCartContext } from "../../Context";
import { useLocation,useParams } from "react-router-dom";

function Home() {
  const context = useContext(ShoopingCartContext)
  const products = context.items;
  

  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-6 w-auto lg:px-32 lg:py-2 md:gap-8 items-center justify-center md:space-x-8 space-y-4">
        {
          products?.filter(item => item.title.toUpperCase().includes(context.searchTitle.toUpperCase())).map( (item) => 
            (
              <Card data={item} key={item.id}/>
            )
          )
        }
      </div>

      <ProductDetail/>
      <CheckoutSideMenu/>
    </Layout>
  )
}

export default Home
