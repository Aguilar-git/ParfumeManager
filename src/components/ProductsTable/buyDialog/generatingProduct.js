import Query from "../../../models/Fetch.js";

export default {
  data() {
    return {
      dialog: false,
      headers: {
        "Content-Type": "application/json",
      },
      lists: {
        companies: [],
        fragrants: [],
        maxVolumes: [],
        concentrations: [],
      },
      product: {
        purchaseVolume: 0, //
        buy: 0, //
        sellPerMilliliter: 0, //
        dateBuy: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10), //
        maxVolumeValue: 0, //
        userId: localStorage.getItem("userId"),
        fragrantName: "", //
        concentrationName: "", //
        companyName: "", //
      },
      step: 1,
      menu: false,
    };
  },
  methods: {
    async CreateProduct() {
      await Query._post("http://localhost:1337/products/create", this.headers, this.product)
      this.dialog = false;
      this.$emit("update-table");
    },

    async GetData(url) {
      const response = await fetch(url).then((result) => result.json());
      return response;
    },

    async ArgumentInitialization() {
      // Компании
      this.lists.companies = (await Query._get("http://localhost:1337/products/companies", this.headers)).map((item) => {
        return item.companyName;
      });
      this.lists.fragrants = (await Query._get("http://localhost:1337/products/fragrants", this.headers)).map((item) => {
        return item.fragrantName;
      });
      this.lists.maxVolumes = (await Query._get("http://localhost:1337/products/max-volumes", this.headers)).map((item) => {
        return item.volumeValue;
      });
      this.lists.concentrations = (await Query._get("http://localhost:1337/products/concentrations", this.headers)).map((item) => {
        return item.concentrationName;
      });
    },
  },
  async mounted() {
    await this.ArgumentInitialization();
  },
};
