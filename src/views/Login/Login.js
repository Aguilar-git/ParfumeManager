export default {
    data() {
        return {
            dialog: true,
            loginUrl: "http://localhost:1337/login",
            data: {
                login: "",
                password: "",
            },
        };
    },
    methods: {
        async postData(loginUrl, data) {
            const response = await fetch(loginUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        },
        logIn() {
            this.postData(this.loginUrl, this.data)
                .then(() => {
                    this.success();
                })
                .catch(() => {
                    console.log("Ошибка авторизации. Неправельный логин или пароль.");
                });
        },
        success() {
            this.$router.push({ path: "/Procurement" });
        },
    },
};