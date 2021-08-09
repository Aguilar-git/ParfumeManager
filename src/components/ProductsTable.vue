<template>
  <v-app>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>Аромат</th>
            <th>Остаток</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in table" :key="item.date">
            <td>{{ item.company }} {{ item.fragrant }}</td>
            <td>{{ item.actualVolume }}/{{ item.purchaseVolume }} мл</td>
            <td>{{ item.sellPerMilliliter }} грн</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      table: [],
      url: "http://localhost:1337/products",
    };
  },
  async mounted() {
    const products = await this.Data(this.url);
    this.table = products;
  },
  methods: {
    async Data(url) {
      let products = await fetch(url);
      return products.json();
    },
  },
};
</script>