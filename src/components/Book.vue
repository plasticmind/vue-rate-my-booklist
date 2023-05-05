<template>
    <li v-if="book" :id="'book-'+book.id" :class="{book: true, 'is-hot': isHot}">
      <div class="book-info">
        <h3 class="title">
          <a v-if="book.purchaseUrl" :href="book.purchaseUrl" title="Get a copy of this book." target="_blank">
            {{ book.title }}
          </a>
          <span v-else>
            {{ book.title }}
          </span>
        </h3>
        <div v-if="book.author" class="author">
          by {{ book.author }}
        </div>
        <div class="book-meta">
          <div v-if="book.rating" class="rating">
            <div class="stars" v-bind:style="{'--rating':book.rating}" :aria-label="'Book rating: ' + book.rating + ' out of 5 stars'"></div>
          </div>
          <span v-if="book.reviewUrl" class="review">
            <a :href="book.reviewUrl" title="Read review of this book.">Review of {{ book.title }}</a>
          </span>
          <div v-if="book.status === 'reading'" class="current" :aria-label="'I\'m currently reading this book.'"><span class="indicator"></span>Currently Reading</div>
        </div>

        <div v-if="book.note" class="book-note">
          {{ book.note }}
        </div>
        <span v-if="book.reviewUrl" class="review">
          <a :href="book.reviewUrl" title="Read review of this book.">Review of {{ book.title }}</a>
        </span>
        <div v-if="book.status === 'reading'" class="current" :aria-label="'I\'m currently reading this book.'"><span class="indicator"></span>Currently Reading</div>
      </div>
      <div v-if="book.note" class="book-note">
        {{ book.note }}
      </div>
    </div>
    <div v-if="book.status && book.status !== 'gave_up' && book.status !== 'finished'" :class="{'rank-info': true, 'has-rank': hasRank}">
      <button aria-label="Upvote this book." @click.once="increaseRank()" class="upvote">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7046 7.8406C12.3155 7.44709 11.6845 7.44709 11.2954 7.8406L4.6575 14.5526C4.02973 15.1874 4.47434 16.2727 5.36214 16.2727H18.6378C19.5256 16.2727 19.9703 15.1874 19.3425 14.5526L12.7046 7.8406Z" fill="white"/>
        </svg>
      </button>
      <div class="rank" aria-label="Book rank: ">{{ book.rank }}</div>
    </div>
  </li>
</template>

<script>
import axios from 'axios'
import Cookies from 'cookies-js'

export default {
    name: 'Book',
    props: {
      book: null
    },
    methods: {
      increaseRank: function () {
        if( !Cookies.get('voted-on-'+this.book.id) ) {
          this.book.rank++;
          axios.put('/api/books', {
            id: this.book.id,
            rank: this.book.rank
          }).then(() => {
            //console.log("Upvoted, thanks!");
            Cookies.set('voted-on-'+this.book.id,'true',{ expires: 365 });
          }).catch(() => {
            //console.log(error);
            // Since upvote didn't write, lower score
            this.book.rank--;
          });
        }
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