import {openDatabase} from 'react-native-sqlite-storage';

export async function database(){
    this.db = !this.db ? this.instance() : this.db;

    this.instance = async ()=>{
        return openDatabase({name: 'todo-data.db', location: 'default'});
    }
}