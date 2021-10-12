export class Product {
    _id:string;
    name:string;
    price:number;
    description:string;
    cateid:string;
    image:string;
    constructor(_id:string, name:string, price:number, description:string, cateid:string, image:string){
        this._id=_id,
        this.name=name,
        this.price=price,
        this.description=description,
        this.cateid=cateid,
        this.image=image
    };
}
