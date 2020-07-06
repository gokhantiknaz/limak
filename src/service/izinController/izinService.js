import Axios from 'axios';

//const RESOURCE_NAME = 'http://www.json-generator.com/api/json/get/';


export default class izinService {
    async getAll() {
        let result = await Axios.get("https://izin.herokuapp.com/api/izin");
        return result;
    }

    test(izin)
    {
        Axios.post("https://izin.herokuapp.com/api/izin/", izin)
    .then((response) => {
        // Success 🎉
        console.log(response);
        return response;
    })
    .catch((error) => {
        // Error 😨
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data);
            return error.response.data;
            
        } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
    }
    
    async save(izin) {
        try {

            if (izin._id) {
                return Axios.put("https://izin.herokuapp.com/api/izin/" + izin._id, izin).then(
                    (result) => {
                        return result.data;
                    },
                    (error) => {
                        console.log(error.response.data.errors)
                        return error.response.data;
                        
                    }
                )

            } else {
                return Axios.post("https://izin.herokuapp.com/api/izin/", izin).then(
                    (result) => {
                        return result.data;
                    },
                    (error) => {
                        return error.response.data;
                    }
                )
            }
        } catch (error) {

            // .catch(error => {
            //     error.response.data.errors.array.forEach(element => {
            //         this.$toast.add({
            //             severity: 'error',
            //             summary: 'Hata Mesajı',
            //             detail: element.msg,
            //             life: 3000
            //         });
            //     });
            // });

            // this.$toast.add({
            //     severity: 'error',
            //     summary: 'Hata Mesajı',
            //     detail: error,
            //     life: 3000
            // });

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
        let result = Axios.get("https://izin.herokuapp.com/api/pdf/" + id, {
            responseType: "arraybuffer"
        });
        return result;
    }

    getHakedisler() {
        let result = Axios.get("https://izin.herokuapp.com/api/izinhakedis");
        return result;
    }

}