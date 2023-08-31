

const ProductCard = ({product}) =>{
    const title = product.title;
    const imageUrl = product.image; 
    const price = product.price;
    const count = product.count;
    return (
        <div className="flex justify-between items-center left-0 w-full">
            <div className="flex items-center gap-2 w-2/3">
                <figure className="w-1/4 h-32">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <div className="w-3/4">
                    <p className="text-medium font-light">{title}</p>
                    <p className="text-lg font-medium">$ {price}</p>
                </div>
            </div>
            <div className="flex items-center gap-2 w-1/3 rounded-sm">
                <div className="flex space-x-2">
                    <label className="bg-slate-200 rounded-full p-2">{count}</label>
                    
                </div>
                <p className="text-md font-sm">$ {(price*count).toFixed(2)}</p>
            </div>
        </div>
    )
}

export { ProductCard }