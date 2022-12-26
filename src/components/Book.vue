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
                console.log("Upvoted, thanks!");
                Cookies.set('voted-on-'+this.book.id,'true',{ expires: 365 });
              }).catch((error) => {
                console.log(error);
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

<style>
.book {
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  border-bottom: solid 1px #eee;
}
.book-info {
  flex-grow: 1;
}
.title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 900;
  padding-bottom: 0.25rem;
  position: relative;
}
.current {
  display: inline-block;
  position: relative;
  background: var(--accent-dark);
  color: #fff;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  padding: 0.25rem 0.75rem 0.3rem 1rem;
  border-radius: 12px;
}
.current span {
  content: "";
  display: inline-block;
  position: absolute;
  left: 0.5rem;
  top: calc(50% - 1px);
  background: #fff;
  border-radius: 50%;
  height: 3px;
  width: 3px;
	/* box-shadow: 0 0 0 0 rgb(40, 157, 143, 1); */
  box-shadow: 0 0 0 0 rgb(255, 255, 255, 1);
	animation: pulse 2s infinite;
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
	}
	
	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(40, 157, 143, 0);
	}
	
	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(40, 157, 143, 0);
	}
}
.author {
  color: var(--neutral-10);
  padding-bottom: 0.25rem;
}
.book-meta {
  display: flex;
  align-items: center;
}
.rating {
  color: #E8C270;
  font-size: 0.8rem;
  margin: 0.5rem 0.5rem 0 0;
}
.stars {
  --percent: calc(var(--rating) / 5 * 100%);  
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
  --star-size: 20px;
  --star-color: #eee;
  --star-background: #E8C270; 
}
.stars::before {
  content: '★★★★★';
  letter-spacing: -1px;
  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.review a {
    margin-top: 0.5rem;
    display: block;
    width: 12px;
    height: 16px;
    overflow: hidden;
    text-indent: -999em;
    opacity: 0.8;
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
  color: var(--neutral-10);
  margin-top: 0.5rem;
  line-height: 1.3;
}
.upvote {
  cursor:pointer;
  border:none;
  margin: 0;
  padding: 0;
  background: #fff;
  border-radius: 3px;
  width: 28px;
  height: 28px;
  line-height: 0;
border: solid 1px var(--accent-dark);
  transition: all 0.5s;
}
.upvote path {
  fill: var(--accent-dark);
transition: all 0.5s;
}
.upvote:hover,
.upvote:focus {
  background: linear-gradient(var(--accent-light),var(--accent-dark));
background: var(--accent-dark);
  transition: all 0.1s;
}
.upvote:hover path,
.upvote:focus path {
  fill: #fff;
  transition: all 0.1s;
}

/*
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
*/
.is-hot {
  transition: border-width 0.5s;
  border-right: solid 2px #E8C270;
}
.rank {
  opacity: 0;
  color: var(--accent-light);
  margin-top: 0.25rem;
  font-size: 1rem;
  transition: opacity 1s;
}
.has-rank .rank {
  opacity: 1;
}
</style>
