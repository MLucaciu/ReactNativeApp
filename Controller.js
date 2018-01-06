import {
    AsyncStorage,
} from 'react-native';

const apiHost = 'https://travian-npc.000webhostapp.com/getCityMircea.php';

export default {

    async getOrase(){

        let response = await fetch(apiHost, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        });

        let orase =  JSON.parse(await response.text()).orase;
        // await AsyncStorage.setItem("listaOrase", orase);
        // console.log(orase);
        return orase;
    }
}