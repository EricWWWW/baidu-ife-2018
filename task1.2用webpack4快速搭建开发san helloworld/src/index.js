import san from 'san';

const App = san.defineComponent({
    template: `
                <div>
                    <p>{{msg}}</p>
                </div>
     `
});

let app = new App({
    data:{
        msg:'Hello World!'
    }
})

app.attach(document.body)