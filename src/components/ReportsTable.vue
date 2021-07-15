<template>
  <v-app>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Кол-во рабочих</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in table" :key="item.date">
            <td>{{ item.date }}</td>
            <td>{{ item.numberOfWorkers }}/{{ item.maxWorkers }}</td>
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
      table: [
        { date: "10.02.2001", numberOfWorkers: 10, maxWorkers: 12 },
        { date: "9.02.2001", numberOfWorkers: 12, maxWorkers: 12 },
        { date: "8.02.2001", numberOfWorkers: 10, maxWorkers: 12 },
        { date: "7.02.2001", numberOfWorkers: 18, maxWorkers: 12 },
        { date: "6.02.2001", numberOfWorkers: 11, maxWorkers: 12 },
        { date: "5.02.2001", numberOfWorkers: 10, maxWorkers: 12 },
      ],
    };
  },
};
</script>