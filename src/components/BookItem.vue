<template>
    <div class="book-item">
      <div class="book-cover">
        <img :src="book.cover" :alt="book.title" />
      </div>
      <div class="book-info">
        <div class="book-title">{{ book.title }}</div>
        <div class="book-author">{{ book.author }}</div>
        <div class="book-date">{{ book.publishedDate }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookItem',
    props: {
      book: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .book-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: transform 0.2s;
  }
  
  .book-item:hover {
    transform: scale(1.05);
  }
  
  .book-cover img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .book-info {
    text-align: center;
    margin-top: 10px;
  }
  
  .book-title {
    font-size: 1.2em;
    color: #333;
    margin: 5px 0;
  }
  
  .book-author {
    color: #777;
    margin: 5px 0;
  }
  
  .book-date {
    color: #aaa;
    margin: 5px 0;
  }
  </style>