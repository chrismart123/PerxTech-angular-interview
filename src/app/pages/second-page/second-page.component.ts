import { Attribute, Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
import  *  as  data  from  '../../../assets/data/api/example.json';

import {validateIP} from '_helpers/checkIP'
@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.component.html',
    styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    employeeData: any;
    http: any;
    tableData:any = {};

    validateIP:boolean;
    constructor( private ds:DataService) { }

    ngOnInit(): void {
    this.validateIP;
      
            // this.getAdvantageData();

    }

    // getAdvantageData(){
    //    this.ds.getApiLog().subscribe(
    //        (data) => {
    //             console.log('succes data:', data);
    //             this.loadExampleJson(data.data);
    //         }, (err) => {
    //             console.log('err data:', err)
    //         })
       
    // }

    // loadExampleJson(data) {
    //     const tData = data
    //     console.log('loadExampleJson',tData)
    //     setTimeout(() => {
    //         $(() => {
    //             this.dtOptions = {
    //                 data: tData,
    //                 autoWidth: true,
    //                 deferRender: true,
    //                 pagingType: 'full_numbers',
    //                 pageLength: 5,
    //                 processing: true,
    //                 columns: [
    //                     { title: 'id', data: 'id' },
    //                     { title: 'Name', data: 'attributes' },
    //                     { title: 'Type', data: 'type' },
    //                     { title: 'Image', data: 'attributes' },
    //                     { title: 'Created', data: 'attributes' },
    //                     { title: 'Updated', data: 'attributes' },
    //                 ],
    //                 columnDefs: [
    //                     { title: 'id', width: '1%', targets: 0, visible:false },
    //                     { title: 'name', width: '10%', targets: 1,
    //                         render: function (data, type, row, meta) {
    //                             return "<a href="+row['links'].self+" target='_blank' >"+data.content+"</a>";
    //                         }
    //                     },
    //                     { title: 'type', width: '10%', targets: 2, },
    //                     { title: 'img', width: '5%', targets: 3,
    //                         render: function (data, type, row, meta) {
    //                             let dataImg = data.display_properties;
    //                             return "<img src="+dataImg.image+" width='20px' class='imgWidth'/> - "+dataImg.type+" ";
    //                         }
    //                     },
    //                     { title: 'type', width: '10%', targets: 4,
    //                         render: function (data, type, row, meta) {
    //                             return data.created_at;
    //                         }    
    //                     },
    //                     { title: 'type', width: '10%', targets: 5,
    //                         render: function (data, type, row, meta) {
    //                             return data.updated_at;
    //                         }   
    //                     }
    //                 ]
    //             };

                

    //             $('table.dtTables').DataTable(this.dtOptions);

    //         });
    //     }, 500);
    // }

    // check IP address
	ipAddressOnly(event): boolean { 
        let retValue = validateIP(event);
        this.validateIP = retValue;
        console.log('validateIP',retValue);
		return retValue;
	}

}
