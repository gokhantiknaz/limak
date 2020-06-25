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
      izinServis: null,
      unvanlistesi: null,
      selectedpers: null,
      selectedunvan: null,
      selectedizinturu: null,
      izin: {
        personelBy: {


        },
        basTarih: null,
        sonTarih: null,
        izinTipi: 1,
        adres: "",
        telefon: "",

      }
    }
  },
  created() {
    this.personelServis = new personelService();
    this.izinServis = new izinService();
    this.personellistesi = [];


    this.personelServis.getAll().then(
      res => this.personellistesi = res.data.data

    );
    this.izinServis.getizinturleri().then(a => {
     
      this.izinturleri = a.data.data
    });

    this.unvanlistesi = this.personelServis.getunvanBilgiler();
  },
  computed: {

  },
  mounted() {
  
  },
  methods: {
    izinkaydet() {

      this.izinServis.save(this.izin).then(a => {
        console.log(a)
        this.$toast.add({
          severity: 'success',
          summary: 'Kaydedildi',
          detail: 'İzin Kaydedildi',
          life: 3000
        });
        this.$router.push("izinlist");
      });

    },

  }
}