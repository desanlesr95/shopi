import { ProductCard } from "../ProductCard";

const OrdersCard = ({order}) =>{
    console.log("orden",order);
    return (
        <div className="flex flex-col justify-between items-center w-full lg:w-1/2 md:w-2/3 xl:w-1/2 space-y-2 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-2 w-full justify-center">
                <span className="font-medium text-md">Key:</span>
                <span className="font-semibold text-md text-slate-500">{order.key}</span>
            </div>
            <div className="flex items-center gap-2 w-full justify-center">
                <span className="font-medium text-md">Orden realizada:</span>
                <span className="font-semibold text-md text-slate-500">{order.date}</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-full rounded-sm">
                <p className="text-md font-semibold">Número de productos : {order.number_of_products}</p>
                <p className="text-lg font-bold text-gray-600">Total : ${order.total}</p>
            </div>

            <div className="flex flex-col items-center gap-2 w-full rounded-sm my-2 shadow-lg p-4">
                <p className="font-semibold text-lg underline mt-4">Detalle de la orden</p>
                {
                    order.products.map(product =>(
                            <ProductCard
                                product={product}
                                key={product.id}
                            />
                        ))
                }
            </div>

        </div>


       
    )
}

export { OrdersCard }