import { Component, OnInit } from '@angular/core';

import { ModalService } from '../_modal';

@Component({ templateUrl: 'home.component.html' ,
styleUrls:['home.component.css']
})
export class HomeComponent implements OnInit {
    bodyText: string;
    company: any;
    vehicleName:any;
    ModelNumber: any;
    driverName: any;
    vehicleType: any;

    constructor(private modalService: ModalService) { }

    ngOnInit() {
    this.row = [ { "id": "CJDarcl", "name": "test", "price": "test", "quantity": "3", "modelno": "DSNG BUlK", "editmode": true } ]

    }

    openModal(id: string) {
        this.modalService.open(id);
        var obj = {
            id: '',
            name: '',
            price: 'null',
            quantity: 'driverName',
            modelno: '',
            editmode: false,
          };
      
          this.row.push(obj);
    }

    closeModal(id: string) {
        

        if (this.row[this.row.length-1].id===''||
        this.row[this.row.length-1].name===''||
        this.row[this.row.length-1].price===''||
        this.row[this.row.length-1].quantity===''||
        this.row[this.row.length-1].modelno===''||this.row[this.row.length-1].id===null||
        this.row[this.row.length-1].name===null||
        this.row[this.row.length-1].price===null||
        this.row[this.row.length-1].quantity===null||
        this.row[this.row.length-1].modelno===null){
          alert("Enter All Fields")
        }else{
    
          if (this.row[this.row.length-1].editmode === true) {
            this.row[this.row.length-1].editmode = false;
            this.modalService.close(id);
          } else {
            this.row[this.row.length-1].editmode = false;
            this.modalService.close(id);
          }


        
        }

    }

    total = 0;
  
    url = 'http://34.77.23.202/Home/Post/';
    row = [
      {
        id: '',
        name: 'test',
        price: '',
        quantity: '',
        modelno: '',
        editmode: true,
      },
     
    ];
  
    State: any = [
      { id: 1, name: "001 TATA LSM" },
      { id: 2, name: "002 Mahindra SSDJ" },
      { id: 3, name: "003 Ashok DSNG" }
    ]
  
    City: any = [
      { id: 1, name: "LSM Full Load", state: 1 },
      { id: 2, name: "LSM BIO LOAD", state: 1 },
      { id: 3, name: "LSM FMCG", state: 1 },
      { id: 4, name: "SSDJ Bulk", state: 2 },
      { id: 5, name: "SSDJ Light", state: 2 },
      { id: 6, name: "DSNG BUlK", state: 3 },
      { id: 7, name: "DSNG Light 2", state: 3 }
    ]
  
    selectedState : any = "";
    selectedCity : any = "";
    //I've taken another Variable to bind city dropdown after filter. If I used same
    // Variable, after second filter my city dropdown will not contains all values and 
    // Data will be null
  
    dropdownCity: any = [];
  
    populateCity(value) {
      this.dropdownCity = this.City.filter(i => i.state == value);
    }
  
     
    editRow(index, data) {
      if (this.row[index].id===''||
      this.row[index].name===''||
      this.row[index].price===''||
      this.row[index].quantity===''||
      this.row[index].modelno===''){
        alert("Enter All Fields")
      }else{
  
        if (this.row[index].editmode === true) {
          this.row[index].editmode = false;
          this.row[index] = data;
        } else {
          this.row[index].editmode = true;
          this.row[index] = data;
        }
      }
      
    }
  
    addTable() {
      console.log(this.row.length);
      const obj = {
        id: '',
        name: '',
        price: '',
        quantity: '',
        modelno: '',
        editmode: false,
      };
  
      this.row.push(obj);
      this
      this.row[this.row.length - 1].editmode = true;
     
      
  
    }
  
    deleteRow(x) {
      var delBtn = confirm(' Do you want to delete ?');
      if (delBtn == true) {
        this.row.splice(x, 1);
      }
    }
  
    addOrder() {
      const resp = this.http.post(this.url, this.row).subscribe(
        (response) => {
          console.log(response);
        },
        (response) => {
          console.log(response);
        }
      );
    }
}