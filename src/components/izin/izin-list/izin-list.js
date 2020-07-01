import izinService from '../../../service/izinController/izinService';
import download from 'downloadjs'
export default {
  name: 'izin-list',
  components: {},
  props: [],
  data() {
    return {
      filters: {},
      loading: true,
      izinturleri: null,
      izinlistesi: null,
      selectedIzin: null,
      izinServis: null,
      word: '',
      options: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    }
  },
  created() {
    this.izinServis = new izinService();
    this.izinlistesi = [];
  },
  computed: {

  },
  mounted() {
    this.izinServis.getizinturleri().then(a => {
      this.izinturleri = a.data.data;

      this.izinServis.getAll().then(
        res => {
          this.izinlistesi = res.data.data
          this.loading = false;
        }
      );
    });

  },
  methods: {

    getizinturadi(izinturid) {
      let isim = this.izinturleri.find(a => a.izinTipId == izinturid);

      if (isim)
        return isim.izinTip;
      else
        return "Belirsiz";
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    downloadItem(item) {
      this.selectedIzin = item.data;

      this.izinServis.download(this.selectedIzin._id).then(result => {


        console.log(result.data);

        const blob = new Blob([result.data], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // vnd.openxmlformats-officedocument.wordprocessingml.document
        })

        // download(result.data,"test", "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
        // console.log(result);


        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = this.selectedIzin.personelBy.isim + '_izin.doc'
        link.click()
        URL.revokeObjectURL(link.href)

      });
    },

    belgeindir(item) {

      this.selectedIzin = item.data;
      this.word = this.selectedIzin.personelBy.isim + " persnoeline ait izindir Başlama:" + this.selectedIzin.basTarih;
      var vm = this,
        word = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'>
      <title>Personel İzin Formu</title>
      </head>
      <body>${vm.word}</body></html>`;

      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(word);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = this.selectedIzin.personelBy.isim + '_izin.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
    },

    izinguncelle(item) {

      this.selectedIzin = item.data;
      this.$router.push({
        name: 'izingiris',
        params: {
          izin: this.selectedIzin
        }
      })
    },

    izinsil(dialog, item) {
      this.selectedIzin = item.data;
      this.izinServis.delete(this.selectedIzin._id).then(
        () => {
          const idx = this.izinlistesi.indexOf(this.selectedIzin)
          this.izinlistesi.splice(idx, 1)
        }
      );
      this.selectedIzin = null;
      dialog.close();

    }
  }
}