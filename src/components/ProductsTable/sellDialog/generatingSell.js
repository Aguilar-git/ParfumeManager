export default {
  props: {
    item: Object,
    dialog: Boolean,
    closeFunction: Function,
  },
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateTimePickerMenu: false,
    };
  },
  methods: {},
};
