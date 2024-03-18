<template>
<div class="post">
    <Nav/>
    <div class="grid grid-cols-2 gap-4 pt-10 pb-10 pl-12 pr-12 ">
      <div v-for="post in posts" :key="post.id">
        <Post :title="post.title" :body="post.body"></Post>
        <!-- <h1 class="text-white">{{ post.title }}</h1> -->
      </div>
    </div>
    <Footer/>
</div>
</template>
<script>
import axios from 'axios'
import Nav from "../components/nav.vue"
import Footer from "../components/footer.vue"
import Post from "../components/post.vue"
export default {
    components: {
        Nav,
        Footer,
        Post
    },
    data(){
        return{
            posts:[],

        }
    },
    mounted() {
        this.fetchPosts();
    },
    methods: {
        fetchPosts(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts =  response.data;
            })
            .catch(error => {
                console.error('error fatch post', error)
            });
        }
    },

}
</script>