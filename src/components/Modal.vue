<template>
<div>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal"  style="float: right;" data-bs-target="#exampleModal" >
  Add New <i class="bi bi-person-plus"></i>
</button>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="form-title"></div>
        <h5 class="form-group" id="exampleModalLabel" >Fil this form with your informations</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
  
      <div class="modal-body">
         <div class="container">
           <form class="vendor-form" > 
               <div class="form-group">
               <label class="form-label" for="typeText" id="form-outline">Vendor name </label>
               <input type="text" id="typeText" v-model="name" class="form-control" maxlength="20" placeholder="Company name" required/><br>
               </div>
               <div class="form-group">Phone number
               <input type="text" placeholder="(387) XX XXX XXX" class="form-control" maxlength="11" v-model="number" required>
               </div> <br>
               <div class="form-group">
               <label for="exampleInputEmail1">Email address</label>
               <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
               <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
               </div> <br>
               <div class="form-group">
               <label class="form-label" for="typeText" id="form-outline">Contact pearson</label>
               <input type="text" id="typeText" v-model="contact" class="form-control" /><br>
               </div>
               <div class="form-row">
               <div class="form-group col-md6">
               <label for="cityTown" class="form-group">City</label>
               <input id="cityTown" type="text" class="form-control" maxlength="20" placeholder="The headquarters of the company" v-model="city" required>
               </div><br>
               <div class="form-group">
               <label for="postalCode" class="form-group">Zipcode</label>
               <input id="postalCode"  type="text"  class="form-control"   maxlength="5" placeholder="88000" v-model="zipcode">
               </div><br>
               <div class="form-group">
               <label for="address" class="form-group">Address</label>
               <input id="address" type="text" v-model="address" class="form-control" placeholder="company adress" required>
               </div>
               </div><br>
               <div class="form-group">
               <label for="message" class="form-group"> Additional Comment</label>
               <textarea id="message" rows="2" v-model="comment"  cols="50" class="form-control" placeholder="Feel free to leave us a message..."></textarea>
               </div>
               <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="submit" @click="saveChanges" value="submit" class="btn btn-primary">Save changes</button>
               </div>
           </form>
         </div>
       </div>
     </div>
  </div>
</div>
</template>

<script>

export default{

  data(){

    return {
       name:'',
       number: '',
       email:'',
       contact: '',
       city: '',
       zipcode: '',
       address:'',
       comment:'',
       createdObject:{}
       
    }
    
   
  },
  watch: {
    number(){
      this.number=this.number.replace(/[^0-9]/g, '')
      .replace(/^(\d{3})(\d{2})(\d{3})(\d{3})/g, '($1) $2-$3-$4');
    },
    zipcode(){
      this.zipcode=this.zipcode.replace(/[^0-9]/g, '')
    },
    
    city(){
      this.city=this.city.replace(/[^A-Za-z]/g, '')
    }
  },
  methods:{
    saveChanges(){
      
      if(this.name !== '' && this.number !== '' && this.email !== '' && this.contact !== '' && this.city !== '' && this.zipcode !=='' && this.address !== ''  ) {
        this.createdObject = {
           id: this.vendorList.index,
           name: this.name,
           phone: this.number,
           email: this.email,
           contactPearson: this.contact,
           city: this.city,
           zipCode: this.zipCode,
           adress: this.address,
           coment: this.coment,
          };
     /*    this.$emit('save-vendor-clicked',this.createdObject);*/
      }
    }
  }

   
}

</script>