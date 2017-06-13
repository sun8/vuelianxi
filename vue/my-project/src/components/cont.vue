<template slot="1">
<section class="main">
	<input
	  class="toggle-all"
	  type="checkbox"
	  v-model="allcheck"
	  v-show="list.length"
	
	>
	<ul class="todo-list">
	    <li v-bind:class="{completed:val.checked}" v-for="val,index in list">
	        <div class="view">
	            <input class="toggle" type="checkbox" v-model="val.checked">
	            <label
	              
	            >{{val.content}}</label>
	            <button class="destroy"></button>
	        </div>
	        <input class="edit"
	          
	        >
	    </li>
	</ul>
	</section>
</template>

<script>
export default {
  name: 'cont',
  props:['v','lists'],
  data () {
    return {
      val:this.v,
      list:this.lists
    }
  },
  methods:{
  	
  },
  computed:{
  	allcheck:{
			get(){
				if(!this.list.length)return false;
				
				return this.list.length === this.list.filter((e)=>{
					return e.checked;
				}).length;
			},
			set(newVal){
				this.list.forEach((e,i)=>{
					e.checked = newVal;
				});
			}
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
