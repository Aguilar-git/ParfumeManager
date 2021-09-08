import SellDialog from "./sellDialog/generatingSell.vue";
import DeleteDialog from "./deleteDialog/deleteProduct.vue";
import InfoDialog from "./infoDialog/infoAboutProduct.vue";
import AddProduct from "./buyDialog/generatingProduct.vue";

export default {
  components: {
    AddProduct,
    InfoDialog,
    SellDialog,
    DeleteDialog,
  },
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
        selectedItem: {},
      },
      urlGetProducts: "http://localhost:1337/products",
      urlDeleteProduct: "http://localhost:1337/product/delete/",
      dialog: false,
      info_dialog: false,
      delete_dialog: false,
      sell_dialog: false,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateTimePickerMenu: false,
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

    openSellDialog(item) {
      this.table.selectedItem = item;
      this.sell_dialog = true;
    },
    closeSellDialog() {
      this.sell_dialog = false;
    },
    infoDialog(item) {
      this.table.selectedItem = item;
      this.info_dialog = true;
    },
    openDelDialog(item) {
      this.table.selectedItem = item;
      this.delete_dialog = true;
    },
    closeDelDialog() {
      this.delete_dialog = false;
    },

    async deleteProduct() {
      await fetch(this.urlDeleteProduct + this.table.selectedItem.id, {
        method: "DELETE",
      });
      this.delete_dialog = false;
    },
  },
  watch: {
    delete_dialog: function(dialog) {
      if (!dialog) {
        console.log(dialog);
        this.TableInitialization();
      }
    },
  },
};
