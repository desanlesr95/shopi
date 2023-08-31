import { format} from 'date-fns'

export const totalPrice = (products) => {

    var sum = 0;
    products.forEach(
        product => {
            console.log("suma"+sum,(product.count * product.price));
            sum += (product.count * product.price)
        }
    );

    return (sum).toFixed(2);
}

export const formattedDateTime = ()=> {
    const currentDate = new Date();
    const formattedDateTime = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    return formattedDateTime;
}

export const CountProducts = (products) =>{
    var cant = 0;
    products.forEach(
        product => {
            cant += product.count;
        }
    );
    return cant;
}


