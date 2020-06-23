import Axios from 'axios';

const RESOURCE_NAME = 'http://www.json-generator.com/api/json/get/';
//http://www.json-generator.com/api/json/get/coAwQjTJfm?indent=2

const post_Name = "https://en2w11bn19hw4.x.pipedream.net/";

export default class izinService {
    getAll() {
            let methodName = "coAwQjTJfm?indent=2";
            return Axios.get(RESOURCE_NAME + methodName);
        }
        save(izin) {
            let methodName = "post";
            return Axios.post(post_Name + methodName, izin);
        }
        delete(id) {
            let methodName = "delete?" + id;
            return Axios.delete(post_Name + methodName, {
                data: id
            });
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

        getizinturleri()
        {
            return [{
                label: "Yıllık İzin",
                value: "1"
            },
            {
                label: "Ücretli İzin",
                value: "2"
            },
            {
                label: "Ücretsiz İzin",
                value: "3"
            },
            {
                label: "Rapor",
                value: "4"
            },
            {
                label: "Mazaret",
                value: "5"
            },
            {
                label: "Hastalık",
                value: "6"
            }]
        }

}