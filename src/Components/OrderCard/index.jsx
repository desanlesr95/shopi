import { PlusIcon , MinusIcon} from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoopingCartContext } from "../../Context"

const OrderCard = ({product}) =>{
    const context = useContext(ShoopingCartContext)
    const title = product.title;
    const imageUrl = product.image; 
    const price = product.price;
    const count = product.count;
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 w-1/2 xl:w-1/2 lg:w-2/3">
                <figure className="w-2/4 xl:w-1/3 lg:w-2/4 h-auto xl:h-26 lg:h-auto ">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <div className="w-2/4 xl:w-2/3 lg:w-2/4">
                    <p className="text-sm xl:text-medium lg:text-medium font-light">{title}</p>
                    <p className="text-medium xl:text-lg lg:text-lg font-medium">$ {price}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 rounded-sm w-1/2 xl:w-1/2 lg:w-1/3">
                <div className="flex space-x-2">
                    <MinusIcon className="w-4 lg:w-4 md:w-8 cursor-pointer" onClick={
                        ()=> {
                            context.handleDeleteProductCart(product.id)
                            context.setCount(context.count-1);
                        }
                    }/>
                    <label className="bg-slate-200 rounded-full p-2 text-sm">{count}</label>
                    <PlusIcon className="w-4 lg:w-4 md:w-8 cursor-pointer" onClick={
                        ()=> {
                            context.sumCountProductCart(product.id);
                            context.setCount(context.count+1);
                        }
                        
                    }/>
                </div>
                <p className="text-sm font-sm">$ {(price*count).toFixed(2)}</p>
            </div>
        </div>
    )
}

export { OrderCard }