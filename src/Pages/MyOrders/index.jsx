import { useContext } from "react"
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu"
import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ProductDetail } from "../../Components/ProductDetail"
import { ShoopingCartContext } from "../../Context"

function MyOrders() {
    const context = useContext(ShoopingCartContext)
    console.log("ordenesmyorders",context.order);
    const listOrders = context.order;
    return (
      <>
      <Layout>
        <div className="flex gap-6 space-y-2 flex-col w-full max-w-screen-g xl:px-32 py-2 items-center">
         <h1 className="text-xl font-semibold mb-2 mt-2">My orders</h1>
          
          {listOrders?.map(order =>(<OrdersCard order={order} key={order.key}/>))}
          
        </div>

        <ProductDetail/>
        <CheckoutSideMenu/>
      </Layout>
        
      </>
    )
  }
  
  export {MyOrders}