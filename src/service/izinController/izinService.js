import Axios from 'axios';

//const RESOURCE_NAME = 'http://www.json-generator.com/api/json/get/';


export default class izinService {
    async getAll() {
        let result = await Axios.get("https://izin.herokuapp.com/api/izin");
        return result;
    }
     save(izin) {
        let result =  Axios.post("https://izin.herokuapp.com/api/izin", izin);

        return result;
    }
    delete(id) {

        return Axios.delete("https://izin.herokuapp.com/api/izin/" + id);
    }

    getizinturleri() {
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
            }
        ]
    }

}