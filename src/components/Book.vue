<template>
    <li v-if="book && book.status == 'to_read' || book.status == 'reading'" :id="'book-'+book.id" :class="{book: true, 'is-hot': isHot}">
      <div class="book-info">
        <div class="title">
          <a v-if="book.purchaseUrl" :href="book.purchaseUrl" :title="'Purchase '+book.title" target="_blank">
            {{ book.title }}
          </a>
          <span v-else>
            {{ book.title }}
          </span>
        </div>
        <div v-if="book.author" class="author">
          by {{ book.author }}
        </div>
        <div class="book-meta">
          <span v-if="book.rating" class="rating">
            {{ book.rating }}
          </span>
          <span v-if="book.reviewUrl" class="review">
            <a :href="book.reviewUrl" :title="'Read review of '+book.title">Review of {{ book.title }}</a>
          </span>
        </div>
        <div v-if="book.note" class="book-note">
          {{ book.note }}
        </div>
      </div>
      <div :class="{'rank-info': true, 'has-rank': hasRank}">
        <button @click="increaseRank()" class="upvote">△</button>
        <div class="rank">{{ book.rank }}</div>
      </div>
    </li>
</template>

<script>
export default {
    props: {
        book: null
    },
    methods: {
        increaseRank: function () {
            this.book.rank++;
            console.log('Upvoted!');
        }
    },
    computed: {
        isHot: function () {
            return this.book.rank >= 25;
        },
        hasRank: function () {
            return this.book.rank > 0;
        }
    }
}
</script>

<style>
.book {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  border-bottom: solid 1px #ddd;
}
.book:first-of-type {
  border-top: solid 1px #ddd;
}
.book-info {
    flex-grow: 1;
}
.title {
  font-weight: 900;
  padding-bottom: 0.25rem;
}
.author {
  font-size: 0.8rem;
  padding-bottom: 0.25rem;
}
.book-meta {
    display: flex;
  align-items: center;
}
.rating {
  color: #E8C270;
  font-size: 0.8rem;
  margin: 0.25rem 0.5rem 0 0;
}
.review a {
    margin-top: 2px;
    display: block;
    width: 12px;
    height: 16px;
    overflow: hidden;
    text-indent: -999em;
    opacity: 0.5;
    background-image: url(../assets/icon-review.svg);
    transition: opacity 0.5s;
}
.review a:hover {
    opacity: 1;
    transition: opacity 0.2s;
}
.rank-info {
  text-align: center;
  margin: 0.2rem 1rem 0 0;
  font-size: 0.8rem;
  font-weight: bold;
}
.book-note {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}
.upvote {
    cursor: pointer;
    background: #fff;
    color: #274553;
    border-radius: 4px;
    border: solid 1px #ccc;
    transition: all 0.5s;
}
.upvote:hover {
  background-color: #289D8F;
  color: #fff;
  border-color: transparent;
  transition: all 0.2s;
}
.is-hot {
  transition: border-width 0.5s;
  border-right: solid 2px #E8C270;
}
.rank {
  opacity: 0;
  transition: opacity 1s;
}
.has-rank .rank {
  opacity: 1;
}
</style>
