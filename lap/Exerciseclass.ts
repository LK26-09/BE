//bài tập 1 : quản lí học sinh 
class Student{
    private   name:string;
     private age:number;
     private grade:string
    constructor(name:string,age:number,grade:string){
        this.name=name
        this.age=age
        this.grade=grade
    }
    display(): void{
        console.log('thong tin cua sinh vien:\n',
           'ten' ,this.name,'\nTuoi',this.age,'\n gio tinh',this.grade)
    }
}const info=new Student('heloo',19,'nam')
info.display()
//bài tập 2 : Hệ thống ngân hàng 
class BankAccount{
    private accountNumber:string
    protected balance:number
    constructor(accountNumber:string,balance:number){
        this.accountNumber=accountNumber
        this.balance=balance
    }
    deposit(amount:number) : void{
        if(amount>0){
            this.balance+=amount
            console.log('nap tien thanh cong.\nSo Du Tai khoan cua ban la:',this.balance)
        }else console.log('so tien nap khong hop le ,hay xem lai')

    }
    withdraw(amount:number) :void{
        if(amount>this.balance){console.log('so tien  can rut vuot qua so du ');return}
        this.balance-=amount;
        console.log('so du hien tai la:',this.balance)
    }
    
}
class SavingAccount extends BankAccount{
    interestRate: number
    constructor(accountNumer:string,balance:number,interestRate:number){
       super(accountNumer,balance)
        this.interestRate=interestRate
    }
    calculateInterest():number{
        const interest =this.balance*(this.interestRate/100)
        console.log('lai xuat duoc tinh la: ',interest)
        return interest;
    }

}
const Myaccount=new BankAccount('07052005',50000)
Myaccount.deposit(500)
Myaccount.withdraw(200)
//bài tập 3 
class Book{
    title:string
    author:string
    ISBN:string
    constructor(title:string,author:string,ISBN:string){
        this.title=title
        this.author=author
        this.ISBN=ISBN
    }

}
class Library{
    books:Book[]=[]
    addBook(book:Book):void{
        this.books.push(book); 
    console.log('da them sach',book.title)
    }

    removeBook(ISBN:string): void{
        this.books = this.books.filter(book => book.ISBN !== ISBN);
    }

    findBook(title: string): Book | undefined {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    }
}
const library = new Library();
const book1 = new Book("Doramon", "Fujiko Fujio", "12345");
const book2 = new Book("One Piece", "Eiichiro Oda", "23456");

library.addBook(book1);
library.addBook(book2);
const foundBook = library.findBook("One Piece");
if (foundBook) {
    console.log(`Sách tìm thấy: ${foundBook.title} của ${foundBook.author}`);
} else {
    console.log("Sách không tìm thấy.");
}

library.removeBook("12345");




//bài tập 4: hình học 
abstract class Shape{
    abstract calculateArea():number
}
class Rectangle extends Shape{
    width: number;
    height: number
    constructor(width:number,height:number){
        super()
        this.height=height
        this.width=width
    }
    calculateArea(): number {
        return this.width*this.height
    }
}
class Circle extends Shape{
    radius:number;
    
    constructor(radius:number){
        super();
        this.radius=radius
    }
    calculateArea():number{
        return  Math.PI*this.radius**2
    }
}
const Area :Shape[]=[
    new Rectangle(5,10),
    new Circle(12),
];
for(let i=0;i<Area.length;i++){
    console.log('dien tich hinh',i+1 ,':',Area[i].calculateArea().toFixed(2))
}
//bài tập 5: quản lý nhân viên 
class Employee{
    name:string
    position:string
    salary:number
    constructor(name:string,position:string,salary:number){
        this.name=name
        this.position=position
        this.salary=salary
    }
    getDetails():void{
         console.log('ten: ',this.name,'vi tri: ',this.position,'luong',this.salary)
    }
}
class Manager extends Employee{
    constructor(name:string,salary:number){
        super(name,'manager',salary)
    }
    getDetails(): void {
        console.log(this.position,': Ten',this.name,'co luong la: ',this.salary)
    }
}
class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, "developer", salary);
    }

    // Ghi đè phương thức getDetails
    getDetails(): void {
        console.log(this.position,': Ten',this.name,'co luong la: ',this.salary)
       
    }
}
const employee:Employee[]=[
new Manager('canhsatchim',1000),
new Developer('nguyen van a',200)
]
for(let i=0;i<employee.length;i++){
    employee[i].getDetails();
}