import { XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoopingCartContext } from '../../Context'

const ProductDetail = ()=>{
    var context = useContext(ShoopingCartContext);
    const productDetail = context.productDetail;
    console.log(productDetail);
    return (
        <aside className={`${context.visibleProductDetail?'flex':'hidden'} w-3/4 xl:w-[360px] lg:w-[360px] md:w-1/2 h-[calc(100vh-80px)] xs:bg-red-200 flex-col 
        fixed bg-white right-0 border border-black rounded-lg overflow-y-auto z-20`}>
            <div className="flex justify-between items-center px-2">
                <h2 className="font-medium text-xl">Detail</h2>
                <XMarkIcon width={24} onClick={()=>context.closeDetailProduct()}/>
            </div>

            <div className="flex flex-col m-4">
                <h3 className='text-xl font-semibold mb-'>{productDetail.title}</h3>
                <img src={productDetail.image} alt={productDetail} className='rounded-4 shadow-lg mb-2' />
                <p className='font-medium mb-4 text-right underline'>{productDetail.category}</p>
                <p className='text-lg text-justify'> Description: {productDetail.description}</p>

                <p className='font-semibold text-xl text-center'>$ {productDetail.price}</p>



            </div>
        </aside>
    )
}


export { ProductDetail }