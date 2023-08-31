import { useContext } from "react"
import { ShoopingCartContext } from "../../Context"
import { PlusIcon} from '@heroicons/react/24/solid'



const Card = ({data}) =>{
    const context = useContext(ShoopingCartContext)

    const addProductsToCart = () =>{
        context.setCount(context.count + 1);
        context.addProductsToCart(data);
        context.openCartDetail();
        context.closeDetailProduct();
    }

    return (
        <div className="bg-white cursor-pointer xl:w-64 lg:w-64 md:w-64 w-72 h-50 rounded-lg" >
            <figure className='relative mb-2 w-full h-4/5' >
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-2">{data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} onClick={
                        () =>{
                            context.openDetailProductAndData(data);
                            context.closeCartDetail();
                        }
                } />

                <PlusIcon className="absolute shadow-lg top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 m-3 p-1" 
                    onClick={()=>{
                        addProductsToCart();
                    }}/>
                
            </figure>

           
            <p className="flex justify-between h-1/5">
                <span className='xl:text-sm lg:text-sm md:text-sm text-sm font-light w-4/6'>{data.title}</span>
                <span className='xl:text-lg lg:text-lg md:text-lg text-md font-medium'>$ {data.price}</span>
            </p>
        </div>
    )
}

export {Card}