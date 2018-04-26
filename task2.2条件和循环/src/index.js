import san, {DataTypes} from 'san'

const App = san.defineComponent({
    template: `
        <main>
            <button on-click="add">添加信息</button>
            <table border="1">
                <tr>
                    <th>姓名</th><th>审核状态</th><th>操作</th>
                </tr>
                <tr s-for="i,index in person">
                    <td>{{ i.name }}</td>
                    <td>{{ i.status | judgeStatus }}</td>
                    <td>
                        <button s-if="i.status == 0" on-click="audit(index)">审核</button>
                        <button s-else on-click="delete(index)">删除</button>
                    </td>
                </tr>
            </table>
        </main>
    `,
    initData: () => ({
        person: [
        ]
    }),
    add: function (data) {
        this.data.push('person', {
            name: prompt('请输入添加者姓名'),
            status: 0
        })
    },
    delete:function(index){
        this.data.removeAt("person",index);
    },
    audit:function(index){
        this.data.set(`person[${index}].status`,confirm('是否合格')?1:-1)
    },
    filters:{
        judgeStatus:function(val){
            if(val == 0){
                return '待审核'
            }
            else if(val == 1){
                return '合格'
            }
            else{
                return '不合格'
            }
        }
    }

})

window.app = new App();
app.attach(document.body)