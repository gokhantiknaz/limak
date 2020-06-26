import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import izinService from '../../../service/izinController/izinService';

export default {
  name: 'izin-takvim',
  components: {},
  props: [],
  data () {
    return {
      izinservis: null,
      izindetaygoster :false,
       izinlistesi :[],
      options: {
				plugins:[dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultDate: new Date(),
        locale: "tr",
				header: {
					left: 'prev,next',
					center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
				},
        editable: true,
        dateClick: (e) =>  {
          console.log(e);
				alert(e);
        },
        eventClick:(e)=>{
          
          alert(e.event.title);
        }
			},
      events: null,
      
    }
  },
  computed: {
    

  },
  mounted() {
    this.getizinler();
    
  },
  created(){
    this.izinservis = new izinService();
    this.izinlistesi = [];
    this.events = [];
  },
  methods: {
    handleDateClick(e){ console.log(e); }, handleSelect(e){ console.log(e); },
    onEventClick()
    {
this.izindetaygoster = true
    },
    getizinler()
  {

    this.izinservis.getAll().then((result) => {
      this.izinler= result.data.data;
      console.log(result)
      this.izinler.forEach(el => {

        var event = new Object();
event.title=el.personelBy.isim ;
event.start=el.basTarih;
event.end = el.sonTarih;
event.aciklamaAlani = el.aciklamaAlani;

this.events.push(event);

      });

    }).catch((err) => {
      console.log(err);

    });

  }

  }
}


