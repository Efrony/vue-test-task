<template>
    <div id="app"> 
        <component :is="layout">
            <router-view />
        </component>
    </div>
</template>

<script>
import FormLayout from '@/views/layouts/FormLayout.vue'

export default {
    components: {
        FormLayout
    },

    computed: {
        layout() {
            return (this.$route.meta.layout || 'form') +'-layout'
        }
    }
}
</script>

<style lang="scss">
body {
  font-family: Calibri, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #574c50;
}

form{
  border: 1px solid lightgray;
  padding: 15px 20px;
}

h1 {
  font-size: 15px;
  font-weight: 700;
}

h5 {
  font-size: 11px;
  font-weight: 500;
  margin: 5px 0;
}

.first-font {
  font-size: 10px;
}

.second-font {
  font-size: 10px;
  color: gray;
}

section {
  margin-bottom: 25px;
}

select,
input[type="text"] {
  padding: 5px;
  border: 1px solid lightgray;
  width: 180px;
  &:disabled {
    background: #dddddd;
  }
}

input[type="radio"] {
  line-height: 35px;
}

textarea {
  padding: 5px;
  border: 1px solid lightgray;
  resize: none;
  font-family: Arial, sans-serif;
}

label {
  position: relative;
  padding-left: 25px;
  line-height: 28px;
  input {
    transform: scale(1.3);
    position: absolute;
    left: -2px;
    top: -4px;
  }
}

button {
  text-transform: uppercase;
  border-radius: 3%;
  border: none;
  background-color: #ff9767;
  color: white;
  font-size: 10px;
  font-weight: 500;
  padding: 9px 12px 7px 12px;
  cursor: pointer;
  &:disabled {
    background: #dddddd;
  }
  &:hover {
    filter: saturate(300%);
  }
}

.required {
  color: red;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
