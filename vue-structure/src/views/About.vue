<template>
  <div class="about">
    <h1>{{message}}</h1>
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      message: process.env.VUE_APP_MESSAGE_LIMIT
    }
  }
}
</script>
