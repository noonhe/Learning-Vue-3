console.log('hello, vue!');
const app = Vue.createApp({
    //root component
    //data, functions to react to events that we wants
    //component template that will be rendered inside #app

    // template: '<h2>I am the template</h2>'
    data(){
        return {
            //part one
            showBooks:true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 44,
            //part two
            x:0,
            y:0,

            books:[
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    isFav: true
                },
                {
                    title: 'Name of Wind',
                    author: 'Patrick Rothfuss',
                    isFav: false
                },
                {
                    title: 'The way of Kings',
                    author: 'Brandon Sanderson',
                    isFav: true
                }
            ],
            url: 'https://www.thenetninja.co.uk'

        }
    },
    methods: {
        changeTitle(){
            this.title = 'something else'
        },
        changeTitles(val){
            this.title = val
        },
        handleEvent(e){
            console.log(e)
        },
        handleEvent1(e , data){
            console.log(e);
            if(data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed:{ //depends on other data and is based on the changes in those data
        filteredBooks(){
            return this.books.filter((book)=> book.isFav);
        }
    }
});
app.mount('#app');
