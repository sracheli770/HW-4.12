import { v4 as uuid } from 'uuid'


export class Student {
    firstName: string;
    lastName: string;
    id: string = uuid();
    city: string;

    constructor(firstName: string, lastName: string, city: string, id?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        if (id) { this.id = id; }
    }
}