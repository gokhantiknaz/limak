import izinService from '../../../service/izinController/izinService';
export default {
  name: 'izinhakedis',
  components: {},
  props: [],
  data() {
    return {
      izinhakedis: [],
      izinServis: new izinService(),
      loading :true
    }
  },
  created() {
    this.izinServis = new izinService();

  },
  computed: {

  },
  mounted() {
    this.izinServis.getHakedisler().then(result => {
      this.izinhakedis = result.data.data
      console.log(this.izinhakedis);
      this.loading=false;
    });
  },
  methods: {
    kaydet() {

    },

  }
}