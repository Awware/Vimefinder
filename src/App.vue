<template>
  <div id="app">
      <b-container>
        <b-navbar type="light" variant="light" class="mb-1">
            <b-navbar-brand to="/">Vimefinder</b-navbar-brand>
            <b-input-group>
              <b-form-input placeholder="Ник" @keyup.enter="redirectToUsername" v-model="search"/>
              <b-input-group-append>
                <b-button @click="redirectToUsername" :disabled="!maySearch" variant="outline-primary">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                  </svg>
                </b-button>
                <b-button variant="outline-primary">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                </b-button>
              </b-input-group-append>
            </b-input-group>
        </b-navbar>
        <router-view/>
      </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      search: ''
    }
  },
  components: {

  },
  computed:{
    maySearch(){
      return this.search.trim() && !this.search.includes(' ')
    }
  },
  methods:{
    redirectToUsername(){
      this.$router.push(`/user/${this.search}`)
      this.search = ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
