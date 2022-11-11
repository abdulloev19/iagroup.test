export const smsbox = {
  data() {
    return {
      off: false,
      sms: "",
      posts: [
        
      ]
    };
  },
  methods: {
    createPost(event) {
        const newPost = {
          hours: new Date().getHours(),
          minute: new Date().getMinutes(),
          sms: this.sms,
        };
        if (!(this.sms == "")) {
          this.posts.push(newPost);
          this.sms = "";
        }
  },
},
  template: `
    <div v-show="!off" v-on:click="off = true" class="msgbox">SMS</div>
    <div v-show="off" class="msgbox_on">
      <div class="header_msgbox">
        <h1>Напишите нам</h1>
      </div>
      <div class="content_msgbox">
        <div v-for="item in posts"> <div> {{ item.sms }} <span> {{item.hours}}:{{item.minute}} </span> </div>  </div>
      </div>
      <div class="bottom_msgbox">
        <form @submit.prevent>
          <input type="text" v-model="sms" placeholder="Введите сообщение" />
          <button @click="createPost()">send</button>
        </form>
      </div>
    </div>
    `,
};


smsbox.data.date = new Date();