<template>
    <div class="book-store">
      <h1>书店</h1>
      <div class="book-list-grid">
        <BookItem v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
  </template>
  
  <script>
  import BookStoreRepo from '../repo/BookStoreRepo';
  import BookItem from './BookItem.vue';
  
  export default {
    name: 'BookStore',
    components: {
      BookItem
    },
    data() {
      return {
        books: []
      };
    },
    created() {
      const bookRepo = new BookStoreRepo();
      this.books = bookRepo.getAllBooks();
    }
  };
  </script>
  
  <style scoped>
  .book-store {
    padding: 20px;
    background-color: #f4f4f4;
  }
  
  .book-store h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .book-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
    padding: 0;
    list-style: none;
  }
  </style>