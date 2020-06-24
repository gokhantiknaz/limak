import Axios from 'axios';

//const RESOURCE_NAME = 'http://www.json-generator.com/api/json/get/';

const post_Name = "";

export default class izinService {
    async  getAll() {
            let result = await Axios.get("https://izin.herokuapp.com/api/izin");
            return result;
        }
        save(izin) {
            return Axios.post("https://izin.herokuapp.com/api/izin", izin);
        }
        delete(id) {
            let methodName = "delete?" + id;
            return Axios.delete(post_Name + methodName, {
                data: id
            });
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