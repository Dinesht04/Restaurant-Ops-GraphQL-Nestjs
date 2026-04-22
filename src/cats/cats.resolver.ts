import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cats.service';
import { Cat } from './model/cat.model';
import { CreateCatInput } from './dto/create-cat.input';

@Resolver(()=> Cat)
export class CatsResolver {
    constructor(private readonly CatsService:CatService){}

    @Query(()=> [Cat], {name: 'cats'})
    findAll(){
        return this.CatsService.findAll();
    }

    @Mutation(()=>Cat)
    CreateCat(@Args('createCatInput') CreateCatInput: CreateCatInput){
        return this.CatsService.create(CreateCatInput);
    }
}
