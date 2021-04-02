<template>
  <ul class="book-list">
    <Book v-for="a in filteredBooks" :book="a" :key="a.id"></Book>
  </ul>
</template>

<script>
import { EventBus } from '@/main'
import Book from '@/components/Book'
import booklist from '@/booklist.json'


export default {

  components: {
    Book
  },
  data: function () {
    return {
      userFilterKey: 'to_read',
      books: booklist.books
    }
  },
  created: function () {
    EventBus.$on('changeTab', (data) => {
      this.userFilterKey = data;
    })
  },
  computed: {
    /*
    bookFilter: function() {
      return this[this.bookFilterKey];
    },
    */
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
      } else {
        return this.sortBooksByRank.filter((book) => ( book.status === 'to_read' || book.status === 'reading' ) );
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
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
 transition: color 0.5s;
 color: #274553;
}
a:visited {
  color: #E76F50;
}
a:hover {
  transition: color 0.2s;
  color: #289D8F;
}
</style>
