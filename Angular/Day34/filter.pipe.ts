import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any[],searchTerm:string ): any {

    let EmpArray:any[]=[];

    for (let i = 0; i < value.length; i++) {
      
      let name:string=value[i].name;
      let dept:string=value[i].departmentit;
      let status:string=value[i].status; 
      let country:string=value[i].country.cname; 

      if(name.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
     //  if(name.toLowerCase().startsWith(searchTerm.toLowerCase())){
          EmpArray.push(value[i]);
        }else if(dept.toLowerCase().indexOf(searchTerm.toLowerCase())>-1){
          EmpArray.push(value[i]);
      }else if(status.toLowerCase().startsWith(searchTerm.toLowerCase())){
        EmpArray.push(value[i]);
      }else if(country.toLowerCase().startsWith(searchTerm.toLowerCase())){
        EmpArray.push(value[i]);
      }

    }

    return EmpArray;


  }

}
