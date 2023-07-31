import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  // default


  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // value -> jo value aate hai 
  // agrs  -> jiske base par kuch operation perform hota hai

  transform(value: string, gender: string): unknown {
    if(gender=='Male')
      return "Mr. "+value;
    else
      return "Miss. "+value;
  }

}
