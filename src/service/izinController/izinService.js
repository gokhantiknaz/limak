import Axios from 'axios';

//const RESOURCE_NAME = 'http://www.json-generator.com/api/json/get/';


export default class izinService {
    async getAll() {
        let result = await Axios.get("https://izin.herokuapp.com/api/izin");
        return result;
    }
     save(izin) {
         if(izin._id)
         {
            return Axios.put("https://izin.herokuapp.com/api/izin/"+izin.izin_id, izin);
         }
         else
         {
            return Axios.post("https://izin.herokuapp.com/api/izin", izin);
         }
        

        
    }
    delete(id) {

        return Axios.delete("https://izin.herokuapp.com/api/izin/" + id);
    }

   getizinturleri() {
        let result =  Axios.get("https://izin.herokuapp.com/api/izintipi");
        return result;
    }

}