import { XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoopingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard';
import { totalPrice , formattedDateTime, CountProducts} from '../../utils';
import { v4 as uuidv4 } from 'uuid';



const CheckoutSideMenu = ()=>{
    var context = useContext(ShoopingCartContext);
    console.log("carts:"+ context.cartProducts,context.order);
    const cartProducts =  context.cartProducts;
    const onCheckout = () =>{
        const order = {
            products: cartProducts,
            number_of_products: CountProducts(cartProducts),
            total: totalPrice(cartProducts),
            date: formattedDateTime(),
            key : uuidv4()
        }
        context.addOrder(order);
        context.initializeCart();
    }


    return (
        <aside className={`${context.visibleCartDetail?'flex':'hidden'}  w-full xl:w-[400px] lg:w-1/3 p-4  md:w-1/2 h-[calc(100vh-80px)] flex flex-col 
        fixed bg-white right-0 border border-black rounded-lg overflow-y-auto`}>
            <div className="flex justify-between items-center px-2">
                <h2 className="font-medium text-xl">My order</h2>
                <XMarkIcon width={24} onClick={()=>context.closeCartDetail()}/>
            </div>

            <div className="flex flex-col w-full xl:mt-2 xl:px-1 lg:m-2 lg:px-2 space-y-6 mt-8">


                {
                   cartProducts.map(product =>(
                        <OrderCard
                            product={product}
                            key={product.id}
                        />
                    ))
                }


            </div>


            <div className='w-full h-full p-5 flex justify-end items-end gap-16'>
                <p className='text-right font-semibold pb-10'> Total: 
                    
                </p>
                <p className='text-right font-semibold pb-10'> 
                    $ {
                        totalPrice(cartProducts)
                    }
                </p>
            </div>
            <div className='w-full h-auto flex justify-center items-center'>
                <button className='bg-black text-white font-medium rounded-md px-8 py-2 shadow-lg mb-8 text-lg hover:bg-gray-800' onClick={
                    ()=> onCheckout()
                }>
                    Checkout
                
                </button>
            </div>
        </aside>
    )
}


export { CheckoutSideMenu }