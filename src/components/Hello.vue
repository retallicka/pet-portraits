<template>
  <!--<div class="panel-body">-->
    <!--<table class="table table-striped">-->
      <!--<thead>-->
      <!--<tr>-->
        <!--<th>Title</th>-->
        <!--<th>Author</th>-->
      <!--</tr>-->
      <!--</thead>-->
      <!--<tbody>-->
      <!--<tr v-for="art in arts">-->
        <!--<td><a v-bind:href="art.image">{{art.title}}</a></td>-->
        <!--<td>{{art.type}}</td>-->
      <!--</tr>-->
      <!--</tbody>-->
    <!--</table>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
