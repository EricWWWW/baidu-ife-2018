import san , { DataTypes } from 'san';

const App = san.defineComponent({
    template: `
			<main>
				<form action="">
					<input type="text" id="name" placeholder="姓名" value="{= name =}">
					<input type="number" id="age" placeholder="年龄" value="{= age =}" >
					<input type="text" id="des" placeholder="简介" value="{= des =}">
				</form>
				<p>姓名：{{ name }}</p>
				<p>年龄：{{ age | isZero}}</p>
				<p>简介：{{ des }}</p>
				<button on-click="reset">移除信息</button>
			</main>
		`,
    initData:() => ({
        name: 'Eric',
        age: 21,
        des: 'hdu'
    }),
    filters:{
        isZero: val => val==0 ? '' : val
    },
    reset:function(data) {
        this.data.set('name','')
        this.data.set('age',0)
        this.data.set('des','')
    }
})

const app = new App()

app.attach(document.body)