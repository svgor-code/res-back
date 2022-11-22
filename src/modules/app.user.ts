export class User {
    first_name: string;
    
    last_name: string;

    email: string;

    password: string;


    constructor(first_name: string, last_name: string, email: string, password: string){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
}

