import { Injectable } from '@nestjs/common';
import { Addbookdto } from './dto/addbook';

export interface Book {
    id: number;
    title: string;
    author: string;  
    description: string; 
    publishedYear: number;
    createdAt: Date;
    updatedAt: Date
}
@Injectable()
export class BookService {
    private books:Book[]=[
        {
            id:1,
            title:'onepiece',
            author:'Eiichiro Oda',
            description:'Dao Hai Tac',
            publishedYear:1997,
            createdAt: new Date("2023-12-01T10:00:00Z"),
            updatedAt: new Date("2023-12-14T12:00:00Z"),
        },
        {
            id: 2,
            title: "Truyện Kiều",
            author: "Nguyễn Du",
            description: "Tác phẩm thơ kinh điển của văn học Việt Nam",
            publishedYear: 1820,
            createdAt: new Date("2023-12-01T09:00:00Z"),
            updatedAt: new Date("2023-12-14T10:00:00Z"),
        } ,
        {
            id: 3,
            title: "Dế Mèn Phiêu Lưu Ký",
            author: "Tô Hoài",
            description: "Câu chuyện phiêu lưu hấp dẫn của chú Dế Mèn qua nhiều miền đất lạ.",
            publishedYear: 1941,
            createdAt: new Date("2023-12-01T08:30:00Z"),
            updatedAt: new Date("2023-12-14T09:30:00Z"),
        }
    ];
    getBooks(){
        return this.books;
    }
    addBook(body: Addbookdto){
        const newBook:Book={
            ...body
        };
        this.books.push(newBook);
        return newBook;
    }
}
