
<template>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
    <section  >
      <div class="row" >
         <div class="col-lg-12" >
           <div  class="main" >
             <div>
               <h5 >VendorsTable</h5> 
               <div class="topright"> <modal></modal></div>  
              <div >
                   <table class=" table table-striped"  >
                    <thead>
                     <tr> 
                     <th  v-for="(header,index) in vendorsHeaders" :key="index" scope="col">{{header}} </th>
                     </tr>
                    </thead>

                    <tbody>
                     <tr v-for="(vendor,index) in vendorList" :key="index" >
                     <th scope="row" >{{vendor.id}}</th>
                     <td>{{vendor.name}}</td>
                     <td>{{vendor.phone}}</td>
                     <td>{{vendor.email}}</td>
                     <td>{{vendor.contactPearson}}</td>
                     <td>{{vendor.city}}</td>
                     <td>{{vendor.zipCode}}</td>
                     <td>{{vendor.adress}}</td>
                     <td>{{vendor.coment}}</td>
                     <td>
                     <button class="btn btn-primary btn-sm" @click="editForm(index)">Edit<i class="bi bi-pencil-square"></i></button>
                     <button class="btn btn-danger btn-sm" @click="deleteVendor(index)" >Delete<i class="bi bi-trash"></i></button>                   
                     </td>
                     </tr>
                    </tbody>
                   </table>
                 </div>
             </div>
           </div>
          </div>
      </div>
    </section>
<a href="#" class="back-to-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a>

</template>
<script>
import Modal from '@/components/Modal.vue'

export default ({
  
    name:'Vendors',
    components :{
        Modal,
        

    },
    data (){
      return{
      
        vendorsHeaders:[
          '#',
          'Name',
          'Phone Number',
          'Email',
          'Contact pearson',
          'City',
          'Zip Code',
          'Address',
          'Additional Comment',
          'Action'
         
        ],
        vendorList: [
           {
           id:'0',
           name:'sanjo',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko2',
           city:'Mostar',
           zipCode:'88000',
           adress:'adresa3',
           coment:'....'
           },

           {
           id:'1',
           name:'benjo',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko3',
           city:'Sarajevo',
           zipCode:'66000',
           adress:'adresa4',
           coment:'....'
           } ,

           {
           id:'2',
           name:'adin',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko4',
           city:'Tuzla',
           zipCode:'55000',
           adress:'adresa7',
           coment:'....'
           } ,

           {
           id:'3',
           name:'keno',
           phone:'062 062 062',
           email:'test1@test.com',
           contactPearson:'neko',
           city:'Mostar',
           zipCode:'88000',
           adress:'adresa1',
           coment:'....',
           }   
        ]
      }

    },
       methods:{
    
         editForm(index){
          this.vendorList.fill(index);
         },

         deleteVendor: function (index) {
          if(confirm('are you sure?'))
         this.vendorList.splice(index, 1);
        },

        saveVendor(data){
          console.log(data);
         }
      },
/* @save-vendor-clicked="saveVendor" u pozivu modala 
         created(){
         this.$nextTick(()=>{
         this.$root.$on('save-vendor-clicked',(createdObject) => {
         console.log(createdObject);
         this.vendorList.push(createdObject);
        });
    }); 
        
 } */

})
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	

	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
	
		position: absolute;

		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	td:nth-of-type(1):before { content: "Name"; }
	td:nth-of-type(2):before { content: "Phone number"; }
	td:nth-of-type(3):before { content: "Email"; }
	td:nth-of-type(4):before { content: "contactPearson"; }
	td:nth-of-type(5):before { content: "City"; }
	td:nth-of-type(6):before { content: "ZipCode"; }
	td:nth-of-type(7):before { content: "Address"; }
	td:nth-of-type(8):before { content: "comment"; }
}
.topright {
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 18px;
}

</style>
