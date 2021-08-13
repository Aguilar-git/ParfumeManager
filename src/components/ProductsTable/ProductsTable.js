export default {
    data() {
        return {
            // table: [],
            table: {
                headers: [
                    { text: "Аромат", value: "name" },
                    { text: "Остаток", value: "volume", sortable: false },
                    { text: "Цена", value: "sellPerMilliliter" },
                    { text: "Действия", value: "actions", sortable: false }
                ],
                data: [],
                selectedItem: Object
            },
            url: "http://localhost:1337/products",
            dialog: false,
            dialogInfo: false
        };
    },
    async mounted() {
        await this.ArgumentInitialization();
    },
    methods: {
        async Data(url) {
            let products = await fetch(url);
            return products.json();
        },

        async ArgumentInitialization() {
            const products = await this.Data(this.url);
            this.table.data = products.map((item) => {
                item.name = `${item.company} ${item.fragrant}`;
                item.volume = `${item.actualVolume}/${item.purchaseVolume}`;
                return item;
            });
        },
        infoAboutItem(item) {
            this.table.selectedItem = item;
            this.dialogInfo = true;
        }
    },
};