import Axios from 'axios';

//const RESOURCE_NAME = 'http://www.json-generator.com/api/json/get/';


export default class izinService {
    async getAll() {
        let result = await Axios.get("https://izin.herokuapp.com/api/izin");
        return result;
    }
    save(izin) {
        try {
            if (izin._id) {
                let res = Axios.put("https://izin.herokuapp.com/api/izin/" + izin._id, izin);
                console.log(res);
                return res;
            } else {
                let res = Axios.post("https://izin.herokuapp.com/api/izin", izin);
                console.log(res);
                return res;
            }

        } catch (error) {
            this.$toast.error("Servisten bir hata alındı.");
        }



    }
    delete(id) {

        return Axios.delete("https://izin.herokuapp.com/api/izin/" + id);
    }

    getizinturleri() {
        let result = Axios.get("https://izin.herokuapp.com/api/izintipi");
        return result;
    }

    download(id) {
        let result = Axios.get("https://izin.herokuapp.com/api/pdf/" + id,{responseType:"arraybuffer"});
        return result;
    }

    getHakedisler() {
        let result = Axios.get("https://izin.herokuapp.com/api/izinhakedis");
        return result;
    }

}