export default {
  name: 'izin-giris',
  components: {},
  props: [],
  data() {
    return {
      izin : new Object()
    }
  },
  create() {
   
  },
  computed: {

  },
  mounted() {
    if (this.$route.params.izin) {
      this.izin = this.$route.params.izin;
    }
  },
  methods: {

  }
}