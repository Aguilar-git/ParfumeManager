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
        authorization() {
            this.postData(this.loginUrl, this.data)
                .then((data) => {
                    console.log(data[0].login);
                    localStorage.setItem("login", data[0].login);
                    this.success();
                })
                .catch(() => {
                    console.log("Ошибка");
                });
        },
        success() {
            this.$router.push({ path: "/Procurement" });
        },
    },
};