


// const emailInput = document.querySelector('#username');
// const pwInput = document.querySelector('#password');
// const loginBtn = document.querySelector('.btn');

// // #1 登入
// loginBtn.addEventListener('click', login);

// function login(){
//   const username = emailInput.value;
//   const password = pwInput.value;
//   const user = {
//     username,
//     password
//   }

Vue.createApp({
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            console.log(username, password);
            // const url = 'https://vue3-course-api.hexschool.io/v2/';
            // axios.post(`${url}admin/signin`, this.user)
            // .then((res) => {
            //     console.log(res);
            //     console.log(1);
            // })
            // .catch((err) => {
            //     console.dir(err);
            //     alert(err.response.data.message)
            // })
        }
    }
}).mount('#app');