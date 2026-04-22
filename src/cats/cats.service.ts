import { Injectable } from "@nestjs/common";
import { Cat } from "./model/cat.model";
import { CreateCatInput } from "./dto/create-cat.input";



@Injectable()
export class CatService{
    private readonly cats: Cat[] = [];

    create(createCatInput: CreateCatInput): Cat{
        const cat: Cat = {id:Date.now().toString(),...createCatInput};
        this.cats.push(cat);
        return cat;
    }

    findAll() : Cat[] {
        console.log(this.cats)
        return this.cats
    }

}