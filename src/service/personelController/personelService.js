import Axios from 'axios';

export default class izinService {
    async getAll() {
        
        return await Axios.get("https://izin.herokuapp.com/api/personel");
    }

    getnvanBilgiler() {
        return [{
                label: "Yazılım Uzmanı",
                value: 1
            },
            {
                label: "Kıdemli Yazılım Uzmanı",
                value: 2
            },
            {
                label: "Proje Müdür Yardımcısı",
                value: 3
            },
            {
                label: "Proje Müdürü",
                value: 4
            },
            {
                label: "Direktör",
                value: 5
            },
            {
                label: "Ceo",
                value: 6
            },
        ]
    }


}