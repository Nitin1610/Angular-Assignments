class item
{
	itemid:number;
	itemname:string;
	itemprice:number;
	category:string;
	constructor (id:number,name:string,price:number,cate:string)
	{
		this.itemid=id;
		this.itemname=name;
		this.itemprice=price;
		this.category=cate;
	}
	show = () => 
	{
	console.log("Item ID :-"+this.itemid);
	console.log("Item Name :- "+this.itemname);
	console.log("Item Price :- "+this.itemprice);
	console.log("category:- "+this.category);
	}
	
}

let obj =  new item (12,"advik",12000,"T-shirt");
obj.show();