// FILE: BookStoreRepo.ts
import { BookData } from './Book';


class BookStoreRepo {
    private books: BookData[] = [];

    constructor() {
        // 初始化一些示例数据
        this.books = [
            { id: 1, title: "Book 1", author: "Author 1", publishedDate: "2021-01-01", cover: "https://www.mx-fm.com/upfile/sjfm/202102/2021022063096573.jpg", rating: 4.5 },
            { id: 2, title: "Book 2", author: "Author 2", publishedDate: "2021-02-01", cover: "https://www.mx-fm.com/upfile/sjfm/202102/2021022063096573.jpg", rating: 4.0 },
        ];
    }

    // 获取所有书籍
    getAllBooks(): BookData[] {
        return this.books;
    }

    // 根据ID获取书籍
    getBookById(id: number): BookData | undefined {
        return this.books.find(book => book.id === id);
    }

    // 添加新书
    addBook(book: BookData): void {
        this.books.push(book);
    }

    // 更新书籍
    updateBook(id: number, updatedBook: BookData): boolean {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books[index] = updatedBook;
            return true;
        }
        return false;
    }

    // 删除书籍
    deleteBook(id: number): boolean {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default BookStoreRepo;
