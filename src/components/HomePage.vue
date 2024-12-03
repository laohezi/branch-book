<template>
    <div>
      <h1>Home</h1>
      <div>
        <component :is="currentTabComponent"></component>
      </div>
      <div class="bottom-bar">
        <button @click="setTab('bookstore')" :class="{ selected: tab === 'bookstore' }">书城</button>
        <button @click="setTab('bookshelf')" :class="{ selected: tab === 'bookshelf' }">书架</button>
        <button @click="setTab('profilepage')" :class="{ selected: tab === 'profilepage' }">我的</button>
      </div>
    </div>
  </template>
  
  <script>
  import BookStore from './BookStore.vue';
  import BookShelf from './BookShelf.vue';
  import ProfilePage from './ProfilePage.vue';
  
  export default {
    name: 'HomePage',
    components: {
      BookStore,
      BookShelf,
      ProfilePage
    },
    data() {
      return {
        tab: 'bookstore'
      };
    },
    computed: {
      currentTabComponent() {
        return this.tab === 'bookstore' ? 'BookStore' : this.tab === 'bookshelf' ? 'BookShelf' : 'ProfilePage';
      }
    },
    methods: {
      setTab(tab) {
        this.tab = tab;
      }
    }
  };
  </script>
  
  <style scoped>
  /* 设置页面的整体样式 */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  
  /* 设置容器的样式 */
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  /* 设置标题的样式 */
  h1 {
    text-align: center;
    color: #333;
  }
  
  .bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-top: 1px solid #ddd;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  }
  
  .bottom-bar button {
    flex: 1;
    padding: 20px 0;
    border: none;
    background: none;
    font-size: 16px;
    color: #333;
    cursor: pointer;
  }
  
  .bottom-bar button.selected {
    color: #1aad19; /* 微信绿色 */
    font-weight: bold;
  }
  
  .bottom-bar button:hover {
    background-color: #f4f4f4;
  }
  </style>