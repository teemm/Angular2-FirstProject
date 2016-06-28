import {PipeTransform, Pipe} from "angular2/core";
import { IProduct } from  './products';

@Pipe ({
   name : 'producktFilter'
})

export class ProducktFilterPipe implements PipeTransform{
    transform(value : IProduct[], args : string []): IProduct[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((produckt: IProduct) =>
            produckt.productName.toLocaleLowerCase().indexOf(filter) != -1): value;
    }
}