<template>
<footer
  <!--v-show="list.length"
  class="footer" >
    <span class="todo-count">
    	<strong>{{len}}</strong>
    	<span>条未选中</span>
    </span>
  <ul class="filters">
    <li>
      <a href="#/all" :class="{selected:isSelected=='all'}">全部</a>
    </li>
    <li>
      <a href="#/active" :class="{selected:isSelected=='active'}">未完成</a>
    </li>
    <li>
      <a href="#/completed" :class="{selected:isSelected=='completed'}">已完成</a>
    </li>
  </ul>
  <button
    class="clear-completed"
    @click="clear"
  >
      清除完成项
  </button>
</footer>-->
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
			this.list.push({
				content:this.val,
				checked:false
			});
			this.val = '';
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
