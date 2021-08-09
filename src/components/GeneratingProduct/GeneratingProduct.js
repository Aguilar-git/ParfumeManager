export default {
    data() {
        return {
            dialog: false,
            urls: {
                urlCompany: "http://localhost:1337/companies",
                urlFragrant: "http://localhost:1337/fragrants",
                urlMaxVolume: "http://localhost:1337/max-volumes",
                urlConcentration: "http://localhost:1337/concentrations",
            },
            lists: {
                companies: [],
                fragrants: [],
                maxVolumes: [],
                concentrations: [],
            },
            product: {
                companyName: "",
                dateBuy: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10),
                purchaseVolume: 100,
                volumeValue: 0,
                fragrantName: "1",
                concentrationName: "1",
                buy: 0,
                sellPerMilliliter: 0,
            },
            step: 1,
            menu: false,
        };
    },
    methods: {
        async GetData(url) {
            const response = await fetch(url);
            return response.json();
        },

        async ArgumentInitialization() {
            // Компании
            const compaies = await this.GetData(this.urls.urlCompany);
            this.lists.companies = compaies.map((item) => {
                return item.companyName;
            });
            // Ароматы
            const fragrants = await this.GetData(this.urls.urlFragrant);
            this.lists.fragrants = fragrants.map((item) => {
                return item.fragrantName;
            });
            // Максимальные обьёмы
            const maxVolume = await this.GetData(this.urls.urlMaxVolume);
            this.lists.maxVolumes = maxVolume.map((item) => {
                return item.volumeValue;
            });
            // Концентрации
            const concentration = await this.GetData(this.urls.urlConcentration);
            this.lists.concentrations = concentration.map((item) => {
                return item.concentrationName;
            });
        },
    },
    async mounted() {
        await this.ArgumentInitialization();
    },
};