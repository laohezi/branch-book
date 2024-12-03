<template>
    <div>
      <h1>书架</h1>
      <div class="book-list-grid">
        <BookItem v-for="book in books" :key="book.id" :book="book" />
      </div>
    </div>
  </template>
  
  <script>
  import BookRepository from '../repo/BookShelfRepo';
  import BookItem from './BookItem.vue';
  
  export default {
    name: 'BookShelf',
    components: {
      BookItem
    },
    data() {
      return {
        books: []
      };
    },
    created() {
      const bookRepo = new BookRepository();
      this.books = bookRepo.getAllBooks();
    }
  };
  </script>
  
  <style scoped>
  .book-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
    padding: 0;
    list-style: none;
  }
  </style>