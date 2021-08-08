export interface Rental{  
    carId:number;
    rentalId?:number;
    brandName?:string;
    firstName?:string;
    lastName?:string;
    rentDate:Date;
    returnDate?:Date;
    customerName?:string;
    customerId:number;
    colorName:string;
    dailyPrice:number;
    totalPrice:number;
}
