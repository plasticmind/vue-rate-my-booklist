<template>
  <main role="main">
    <ol class="book-list">
      <Book v-for="a in filteredBooks" :book="a" :key="a.id"></Book>
    </ol>
  </main>
</template>

<script>
import { EventBus } from '@/main'
import Book from '@/components/Book'
import axios from 'axios'

export default {
  name: 'BookList',
  components: {
    Book
  },
  data: function () {
    return {
      userFilterKey: 'to_read',
      books: []
    }
  },
  created: function () {
    EventBus.$on('changeTab', (data) => {
      this.userFilterKey = data;
    })
  },
  mounted: function() {
    this.loadBooks();
  },
  methods: {
    loadBooks: function() {
      axios.get('/api/books')
      .then((response) => {
        // console.log("Fetched successfully");
        this.books = response.data;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  computed: {
    filteredBooks: function () {
      let filtered;
      if (this.userFilterKey === "finished" || this.userFilterKey === "gave_up") {
        filtered = this.books.filter((book) => (book.status === 'gave_up' || book.status === 'finished'));
        return filtered.sort((a, b) => b.rating - a.rating); // Sort by rating
      } else if (this.userFilterKey === "reading") {
        filtered = this.books.filter((book) => (book.status === 'reading'));
        return filtered.sort((a, b) => b.rank - a.rank); // Sort by rank
      } else {
        filtered = this.books.filter((book) => (book.status === 'to_read'));
        return filtered.sort((a, b) => b.rank - a.rank); // Sort by rank
      }
    },
    numBooks: function () {
      return this.books.length;
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.book-list {
  min-height: 100vh;
}
</style>
