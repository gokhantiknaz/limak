import Axios from 'axios';

export default class izinService {
    async getAll() {
        
        //return await Axios.get("https://izin.herokuapp.com/api/personel");
        let result = await Axios.get("https://izin.herokuapp.com/api/personel");
            return result;
    }

    // hakedis(id) {
            //     return Axios.get("https://izin.herokuapp.com/api/izinHakedis/izin_id", id);
            // }


    getunvanBilgiler() {
        return [{
                unvanadi: "Ceo",
                value: 1
            },
            {
                unvanadi: "Direktör",
                value: 2
            },
            {
                unvanadi: "Proje Müdürü",
                value: 3
            },
            {
                unvanadi: "Proje Müdürü Yardımcısı",
                value: 4
            },
            {
                unvanadi: "Kıdemli Yazılım Uzmanı",
                value: 5
            },
            {
                unvanadi: "Yazılım Uzmanı",
                value: 6
            },
            {
                unvanadi: "Yazılım Uzman Yardımcısı",
                value: 7
            },
        ]
    }

    getizinturleri()
        {
            return [{
                izinturadi: "Yıllık İzin",
                id: "1"
            },
            {
                izinturadi: "Ücretli İzin",
                id: "2"
            },
            {
                izinturadi: "Ücretsiz İzin",
                id: "3"
            },
            {
                izinturadi: "Rapor",
                id: "4"
            },
            {
                izinturadi: "Mazaret",
                id: "5"
            },
            {
                izinturadi: "Hastalık",
                id: "6"
            }]
        }


}