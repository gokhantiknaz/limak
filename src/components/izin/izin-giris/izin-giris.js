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


        }

      },
      tr: {
        firstDayOfWeek: 0,
        dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
        dayNamesShort: ["Sun", "Pt", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Pz", "Pt", "Sa", "Çar", "Pe", "Cu", "Ct"],
        monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Hz", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Bugün',
        clear: 'Temizle',
        dateFormat: "dd.mm.yy",
        weekHeader: 'Hf'
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
    if (this.$route.params.izin) {
      let tmp = this.$route.params.izin;
      this.izin = tmp;
      // moment(this.izin.basTarih).format("YYYY-MM-DD hh:mm:ss A Z")
      // this.izin.basTarih = new Date("2011-10-04T00:00:00.000Z");

      let x= this.$moment(this.izin.basTarih)
      this.izin.basTarih =x.format("YYYY-MM-DD hh:mm:ss A Z");
    }
  },
  methods: {
    izinhesapla() {
      if (this.izin.basTarih && this.izin.sonTarih) {
        const diffTime = Math.abs(this.izin.sonTarih - this.izin.basTarih);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        this.izin.izinSuresi = diffDays + 1;
      }

    },
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
      // deneme
    },

  }
}