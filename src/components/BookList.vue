<template>
  <ul class="book-list">
    <Book v-for="a in sortedSubmissions" :post="a" :key="a.id"></Book>
  </ul>
</template>

<script>
import Book from '@/components/Book'
import booklist from '@/booklist.json'

export default {
  name: 'BookList',
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
<style scoped>
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
 transition: color 0.5s;
 color: #274553;
}
a:hover {
  transition: color 0.2s;
  color: #289D8F;
}
a:visited {
  color: #E76F50;
}
.book {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  border-bottom: solid 1px #ddd;
}
.book:first-of-type {
  border-top: solid 1px #ddd;
}
.title {
  font-weight: 900;
  padding-bottom: 0.25rem;
}
.author {
  font-size: 0.8rem;
  padding-bottom: 0.25rem;
}
.rating {
  color: #E8C270;
  font-size: 0.8rem;
}
.rank-info {
  text-align: center;
  margin: 0.25rem 1rem 0 0;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
