import personelService from '../../../service/personelController/personelService';
import izinService from '../../../service/izinController/izinService';
export default {
  name: 'izin-list',
  components: {},
  props: [],
  data() {
    return {
      izinturleri: null,
      personellistesi: null,
      personelServis: null,
      izinServis : null,
      unvanlistesi : null,
      selectedpers : null,
      selectedunvan : null,
      selectedizinturu : null,
    }
  },
  created() {
    this.personelServis = new personelService();
    this.izinServis = new izinService();
    this.personellistesi = []; 

  },
  computed: {

  },
  mounted() {
    this.personelServis.getAll().then(
      res => this.personellistesi = res.data.data
      
    );

    this.izinturleri = this.izinServis.getizinturleri(); 
    this.unvanlistesi = this.personelServis.getunvanBilgiler(); 
  },
  methods: {

  }
}