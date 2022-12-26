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
    sortBooksByRank: function () {
      return this.books.slice(0).sort( (a,b) => {
        return b.rank - a.rank;
      });
    },
    sortBooksByRating: function () {
      return this.books.slice(0).sort( (a,b) => {
        return b.rating - a.rating;
      });
    },
    filteredBooks: function () {
      if  ( this.userFilterKey === "finished" ) {
        return this.sortBooksByRating.filter((book) => ( book.status === 'gave_up' || book.status === 'finished' ) );
      } else if ( this.userFilterKey === "reading" ) {
        return this.sortBooksByRank.filter((book) => ( book.status === 'reading' ) );
      } else {
        return this.sortBooksByRank.filter((book) => ( book.status === 'to_read' ) );
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
