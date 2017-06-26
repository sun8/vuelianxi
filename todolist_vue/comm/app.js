//let list = [
//	{
//		content:'早餐很辣',
//		checked:false
//	},
//	{
//		content:'早餐很辣2',
//		checked:true
//	}
//];

//存取localStorage中的数据
var store = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
};
//先去本地数据
var list = store.fetch("key");
//hash值切换
var table = {
	all:function(list){
		return list;
	},
	completed:function(list){
		return list.filter(function(e){
			return e.checked;
		})
	},
	active:function(list){
		return list.filter(function(e){
			return !e.checked;
		})
	}
}


var v = new Vue({
	el:'.todoapp',//挂载元素
	data:{
		list:list,
		val:'',//记录val
		isSelected:'all',//hash值切换
		edtorTodos:'',  //记录正在编辑的是哪条数据
		beforeTitle:'' //记录正在编辑的数据的content
	},
	//可做缓存
	watch:{
		//监控list数据
		list:{
			handler:function(){
				store.save("key",this.list);
			},//深度监听数据变化，数据变化会触发此函数
			deep:true
		}
	},
	methods:{
		//输入生成enter事件
		keyup(){
			if(!this.val)return
			this.list.unshift({
				content:this.val,
				checked:false//选中的记录
			});
			this.val = '';
		},
		//删除
		dele(index){
			this.list.splice(index,1);
		},
		//清除完成项
		clear(){
			this.list = this.list.filter((e)=>{
				return !e.checked;
			})
		},
		//双击编辑任务
		ablclick(val){
			//编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
			this.beforeTitle = val.content;//存起来要编辑的内容
			this.edtorTodos = val;//找到正在编辑的数据，添加class名
		},
		//编辑任务成功
		keyup1(val){
			this.edtorTodos = '';//改变状态即可，去掉class名
		},
		//编辑任务取消
		keyup2(val){
			//现在的内容为之前存起来的内容
			val.content = this.beforeTitle;
			//清空之前存起来的内容
			this.beforeTitle = '';
			//让div显示出来，input隐藏
			this.edtorTodos = '';
		}
	},
	directives:{//自定义指令 聚焦功能
		"foucs":{
			update(el,binding){
				console.log(el,binding)
				if(binding.value){
					el.focus();
				}
			}
		}
	},
	computed:{
		//hash值切换
		table(){
			return table[this.isSelected] ? table[this.isSelected](this.list):this.list;
		},
		//全选
		allcheck:{
			get(){
				//先把选中的挑出来，
				//跟总数据对比，如果选中的length === 数据的length，说明全选
				if(this.list.length==0){
					this.onf = false;
					return false;
				}else{
					this.onf = true;
					return this.list.length === this.list.filter((e)=>{
						return e.checked;
					}).length;
				}
				
			},
			set(newVal){
				console.log(2);
				this.list.forEach((e,i)=>{
					e.checked = newVal;
				});
			}
		},
		//几条未选中的数据
		num(){
			return this.list.filter((e)=>{
				return !e.checked;
			}).length;
		}
	}
});
function hashs(){
	let hash = window.location.hash;
	if(hash){
		hash = hash.substring(2);
	}else{
		hash = 'all';
	}
	v.isSelected = hash;
}
window.onhashchange = hashs;