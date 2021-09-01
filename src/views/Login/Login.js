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
      }).then((result) => result.json());
      return await response;
    },
    async logIn() {
      const userId = await this.postData(
        this.loginUrl,
        this.data
      ).catch(() => {});

      if (userId) {
        localStorage.setItem("userId", userId);
        console.log(localStorage.getItem("userId"));
        this.success();
      }
    },
    success() {
      this.$router.push({ path: "/Procurement" });
    },
  },
};
