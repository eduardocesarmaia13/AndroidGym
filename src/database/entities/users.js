import { EMAIL_VALID, ONLY_SPACES } from "../../constants/regex";

export function Users(){
    this.name = null;
    this.password = null;
    this.email = null;
    this.recovery = null;

    this.getName = () =>{
        return this.name;
    }

    this.setName = (name)=> {
        if(typeof name != "string" || ONLY_SPACES.test(name))
            throw new Error("O nome inserido não é uma string");
    
        this.name = name;
    }

    this.getEmail = () =>{
        return this.email;
    }

    this.setEmail = (email)=> {
        if(typeof email != "string" || !EMAIL_VALID.test(email))
            throw new Error("O e-mail inserido não é válido");
    
        this.email = email;
    }

    this.getPassword = () =>{
        return this.password;
    }

    this.setPassword = (password)=> {
        if(typeof password != "string" || password.length < 5)
            throw new Error("O e-mail inserido não é válido");
    
        this.password = password;
    }

    this.getRecovery = () =>{
        return this.recovery;
    }

    this.setRecovery = (recovery)=> {
        if(typeof recovery != "string" || ONLY_SPACES.test(recovery))
            throw new Error("O nome inserido não é uma string");
    
        this.recovery = recovery;
    }
}