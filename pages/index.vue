<template>
  <div class="container">

    <div v-for="user in userList" :key="user.id" style="text-align: left;">
      <p>id：{{ user.id }}</p>
      <p>名前：{{ user.name }}</p>
      <hr />
    </div>
    <button @click="addUser">ユーザー追加</button>
    <div>
      ユーザー人数: {{ userListLength }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('user', ['userList']),
    ...mapGetters('user', ['userListLength'])
  },
  methods: {
    addUser() {
      this.$store.dispatch('user/addUser')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
