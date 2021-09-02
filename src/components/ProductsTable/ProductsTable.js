export default {
  data() {
    return {
      table: {
        headers: [
          { text: "Аромат", value: "name" },
          { text: "Остаток", value: "volume", sortable: false },
          { text: "Цена", value: "sellPerMilliliter" },
          { text: "Действия", value: "actions", sortable: false },
        ],
        data: [],
        selectedItem: Object,
      },
      urlGetProducts: "http://localhost:1337/products",
      urlDeleteProduct: "http://localhost:1337/product/delete/",
      dialog: false,
      info_dialog: false,
      delete_dialog: false,
    };
  },
  async mounted() {
    await this.TableInitialization();
  },
  methods: {
    async GetProducts() {
      let products = await fetch(this.urlGetProducts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: localStorage.getItem("userId") }),
      }).then((result) => result.json());
      return products;
    },

    async TableInitialization() {
      const products = await this.GetProducts();

      this.table.data = products.map((item) => {
        item.name = `${item.company} ${item.fragrant}`;
        item.volume = `${item.actualVolume}/${item.purchaseVolume}`;
        return item;
      });
    },

    infoDialog(item) {
      this.table.selectedItem = item;
      this.info_dialog = true;
    },
    deleteDialog(item) {
      this.table.selectedItem = item;
      this.delete_dialog = true;
    },

    deleteProduct() {
      fetch(this.urlDeleteProduct + this.table.selectedItem.id, {
        method: "DELETE",
      }).then(() => this.TableInitialization());
      this.delete_dialog = false;
    },
  },
};
