export default {
    data() {
        return {
            dialog: true,
            url: "http://localhost:1337/login",
            data: {
                login: "",
                password: "",
            },
        };
    },
    methods: {
        async postData(url, data) {
            const response = await fetch(url, {
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
            this.postData(this.url, this.data)
                .then((data) => {
                    // console.log(data[0].login);
                    localStorage.setItem("login", data[0].login)
                    this.success();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        success() {
            this.$router.push({ path: "/Main" });
        },
    },
};