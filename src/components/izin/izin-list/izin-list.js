import izinService from '../../../service/izinController/izinService';
export default {
  name: 'izin-list',
  components: {},
  props: [],
  data() {
    return {
      izinlistesi: null,
      selectedIzin: null,
      izinServis: null,
      word: ''

    }
  },
  created() {
    this.izinServis = new izinService();
  },
  computed: {

  },
  mounted() {
    this.izinServis.getAll().then(data => this.izinlistesi = data.data);
  },
  methods: {

    belgeindir(item){
      this.selectedIzin = item.data;
      this.word = this.selectedIzin.personel.adsoyad + "persnoeline ait izindir Başlama:"+ this.selectedIzin.baslamatarihi; 
      var vm = this, word = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' 
      xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'>
      <title>Export HTML to Word Document with JavaScript</title>
      </head>
      <body>${vm.word}</body></html>`;

      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(word);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = this.selectedIzin.personel.adsoyad + '_izin.doc';
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
      // this.izinService.delete(this.selectedIzin.id);
   
      dialog.close();
    
    }
  }
}