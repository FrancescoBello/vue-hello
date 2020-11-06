var mess = new Vue(
  {
    el : '#root',
    data :{
      messaggio : 'welcome on boolean',
      colorTitle : 'orange'
    },
    methods:{
        changeColor () {
        if (this.colorTitle == 'orange') {
          this.colorTitle = 'yellow'
        }else {
         this.colorTitle = 'orange'
        }
      }
    }

  }
)
