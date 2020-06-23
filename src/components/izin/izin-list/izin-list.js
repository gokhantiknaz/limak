
import izinService from '../../../service/izinController/izinService';
export default {
  name: 'izin-list',
  components: {},
  props: [],
  data () {
    return {
      izinlistesi: null,
      selectedIzin:null,
      izinServis:null
    }
  },
  created(){
    this.izinServis= new izinService();
  },
  computed: {

  },
  mounted () {
    this.izinServis.getAll().then(data => this.izinlistesi = data.data);
  },
  methods: {

    izinguncelle(item)
    {
      this.selectedIzin= item.data;
      this.$router.push({ name: 'izingiris', params: { izin: this.selectedIzin }})
    }
  }
}