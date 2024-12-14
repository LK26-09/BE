import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Addbookdto } from './dto/addbook';

@Controller('book')
export class BookController {
    constructor(private readonly BookService: BookService){}

    @Get()
    getBooks(){
    return this.BookService.getBooks();
    }   

    @Post()
    addBook(@Body() body: Addbookdto){
        console.log(body);
        return this.BookService.addBook(body);
    }

}
