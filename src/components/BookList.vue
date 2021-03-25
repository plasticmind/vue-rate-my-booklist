<template>
  <ul class="book-list">
    <Book v-for="a in sortedBooks" :book="a" :key="a.id"></Book>
  </ul>
</template>

<script>
import Book from '@/components/Book'
import booklist from '@/booklist.json'

export default {

  components: {
    Book
  },
  data: function () {
    return {
      books: booklist.books
    }
  },
  computed: {
    sortedBooks: function () {
      return this.books.slice(0).sort( (a,b) => {
        return b.rank - a.rank;
      });
    },
    numBooks: function () {
      return this.books.length;
    }
  },
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
