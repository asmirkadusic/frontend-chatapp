import Service from '@ember/service';
import UserModel from '../models/user';
import { action } from "@ember/object";
import DS from 'ember-data';

export default class LoginService extends Service {

    @action
    checkUser(email, password){
        let User = new UserModel(email, password);
        let data = { user : { email: email, password: password}};
        let usersDatabase = fetch("/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => {
            console.log("Request complete! Response: ", res);
        })
    }

}
