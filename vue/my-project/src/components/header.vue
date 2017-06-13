<template>
  <header class="header" >
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="请输入内容"
      v-model.trim="val"
      @keyup.13="keyup"
      ref="all"
    >
	</header>
</template>

<script>
export default {
  name: 'header',
  props:['v','lists'],
  data () {
    return {
      val:this.v,
      list:this.lists
    }
  },
  methods:{
  	keyup(){
  		if(!this.val)return;
  		console.log(this.list)
			this.list.push({
				content:this.val,
				checked:false
			});
			this.val = '';
			this.$emit('inpclick',this.list);
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
