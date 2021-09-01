export default {
  data() {
    return {
      dialog: false,
      urls: {
        Companies: "http://localhost:1337/product/companies",
        Fragrants: "http://localhost:1337/product/fragrants",
        MaxVolumes: "http://localhost:1337/product/max-volumes",
        Concentrations: "http://localhost:1337/product/concentrations",
        CreateProduct: "http://localhost:1337/product/create",
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
      console.log(this.product);
      await fetch(this.urls.CreateProduct, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.product),
      }).then(() => {
        this.dialog = false;
      });
    },

    async GetData(url) {
      const response = await fetch(url).then((result) => result.json());
      return response;
    },

    async ArgumentInitialization() {
      // Компании
      const compaies = await this.GetData(this.urls.Companies);
      this.lists.companies = compaies.map((item) => {
        return item.companyName;
      });
      // Ароматы
      const fragrants = await this.GetData(this.urls.Fragrants);
      this.lists.fragrants = fragrants.map((item) => {
        return item.fragrantName;
      });
      // Максимальные обьёмы
      const maxVolume = await this.GetData(this.urls.MaxVolumes);
      this.lists.maxVolumes = maxVolume.map((item) => {
        return item.volumeValue;
      });
      // Концентрации
      const concentration = await this.GetData(this.urls.Concentrations);
      this.lists.concentrations = concentration.map((item) => {
        return item.concentrationName;
      });
    },
  },
  async mounted() {
    await this.ArgumentInitialization();
  },
};
