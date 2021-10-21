import SellDialog from "./sellDialog/generatingSell.vue";
import DeleteDialog from "./deleteDialog/deleteProduct.vue";
import InfoDialog from "./infoDialog/infoAboutProduct.vue";
import AddProduct from "./buyDialog/generatingProduct.vue";
import query from "../../models/Fetch.js";

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
      headers: {
        "Content-Type": "application/json",
      },
      // dialog: false,
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
    async getProducts() {
      return await query._post("http://localhost:1337/products", this.headers, {
        userId: localStorage.getItem("userId")
      });
    },

    async deleteProduct() {
      await query._delete(`http://localhost:1337/product/delete/${this.table.selectedItem.id}`, this.headers);
      this.delete_dialog = false;
    },

    async TableInitialization() {
      const products = await this.getProducts();

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
    openInfoDialog(item) {
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
  },
};
