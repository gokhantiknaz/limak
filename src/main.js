import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AutoComplete from 'primevue/autocomplete';
// import Accordion from 'primevue/accordion';
// import AccordionTab from 'primevue/accordiontab';
import Button from 'primevue/button';
// import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
// import Chips from 'primevue/chips';
import Column from 'primevue/column';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import Editor from 'primevue/editor';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FullCalendar from 'primevue/fullcalendar';
import Inplace from 'primevue/inplace';
// import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Listbox from 'primevue/listbox';
// import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
// import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
// import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import SelectButton from 'primevue/selectbutton';
// import Slider from 'primevue/slider';
// import Sidebar from 'primevue/sidebar';
// import SplitButton from 'primevue/splitbutton';
// import Spinner from 'primevue/spinner';
// import Steps from 'primevue/steps';
// import TabMenu from 'primevue/tabmenu';
// import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
 import Tooltip from 'primevue/tooltip';
// import ToggleButton from 'primevue/togglebutton';
// import Tree from 'primevue/tree';
// import TreeTable from 'primevue/treetable';
// import TriStateCheckbox from 'primevue/tristatecheckbox';
import ValidationMessage from 'primevue/validationmessage';


import IzinGiris from './components/izin/izin-giris/index.vue'
import IzinList from './components/izin/izin-list/izin-list'
import IzinTakvim from './components/izin/izin-takvim/izin-takvim'

import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'prismjs/themes/prism-coy.css';
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import './assets/layout/layout.scss';

// Import one of available themes

import VuejsDialog from 'vuejs-dialog';

// include the default style
import 'vuejs-dialog/dist/vuejs-dialog.min.css';
 
// Tell Vue to install the plugin.

import moment from 'moment';
import VueMoment from 'vue-moment';

// Load Locales ('tr' comes loaded by default)
require('moment/locale/tr');

// Choose Locale
moment.locale('tr');

Vue.use(VueMoment, { moment });

Vue.use(VuejsDialog, {
	html: true,
	loader: true,
	okText: 'Evet',
	cancelText: 'İptal',
	animation: 'bounce'
  });

Vue.use(ToastService);
Vue.directive('tooltip', Tooltip);
Vue.config.productionTip = false;
// Vue.component('Accordion', Accordion);
// Vue.component('AccordionTab', AccordionTab);
Vue.component('AutoComplete', AutoComplete);
// Vue.component('Breadcrumb', Breadcrumb);
Vue.component('Button', Button);
Vue.component('Calendar', Calendar);
Vue.component('Card', Card);
Vue.component('Carousel', Carousel);
Vue.component('Chart', Chart);
Vue.component('Checkbox', Checkbox);
Vue.component('Toast', Toast);
// Vue.component('Chips', Chips);
Vue.component('Column', Column);
Vue.component('ContextMenu', ContextMenu);
Vue.component('DataTable', DataTable);
Vue.component('DataView', DataView);
Vue.component('DataViewLayoutOptions', DataViewLayoutOptions);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);
Vue.component('Editor', Editor);
Vue.component('Fieldset', Fieldset);
Vue.component('FileUpload', FileUpload);
Vue.component('FullCalendar', FullCalendar);
Vue.component('Inplace', Inplace);
// Vue.component('InputSwitch', InputSwitch);
Vue.component('InputText', InputText);
Vue.component('InputMask', InputMask);
Vue.component('Listbox', Listbox);
// Vue.component('MegaMenu', MegaMenu);
Vue.component('Menu', Menu);
Vue.component('Menubar', Menubar);
Vue.component('Message', Message);
Vue.component('MultiSelect', MultiSelect);
// Vue.component('OrderList', OrderList);
Vue.component('OrganizationChart', OrganizationChart);
Vue.component('OverlayPanel', OverlayPanel);
Vue.component('Paginator', Paginator);
Vue.component('Panel', Panel);
Vue.component('PanelMenu', PanelMenu);
Vue.component('Password', Password);
Vue.component('PickList', PickList);
Vue.component('ProgressBar', ProgressBar);
Vue.component('RadioButton', RadioButton);
// Vue.component('Rating', Rating);
Vue.component('SelectButton', SelectButton);
// Vue.component('Slider', Slider);
// Vue.component('Sidebar', Sidebar);
// Vue.component('Spinner', Spinner);
// Vue.component('SplitButton', SplitButton);
// Vue.component('Steps', Steps);
// Vue.component('TabMenu', TabMenu);
Vue.component('TabView', TabView);
Vue.component('TabPanel', TabPanel);
 Vue.component('Textarea', Textarea);
// Vue.component('TieredMenu', TieredMenu);
Vue.component('Toolbar', Toolbar);
// Vue.component('ToggleButton', ToggleButton);
// Vue.component('Tree', Tree);
// Vue.component('TreeTable', TreeTable);
// Vue.component('TriStateCheckbox', TriStateCheckbox);
Vue.component('ValidationMessage', ValidationMessage);

Vue.component('IzinGiris', IzinGiris);
Vue.component('IzinList', IzinList);
Vue.component('IzinTakvim', IzinTakvim);



new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
