import { useState } from 'react';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';

const AddTouristsSpot = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  // const [spots,setSpots]= useState()
  const onSubmit = (data) => {
    fetch('http://localhost:5000/touristSpots',{
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(d=>console.log(d))
    if(data.insertedId){
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
 
   
    console.log(data);
  };
    return (
        <div className='w-[40%] shadow-2xl mx-auto p-10 '>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Country Name</span>
          </label>
          <input type="text" placeholder="Country Name" className="input input-bordered" {...register('country_name')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tourist Spot Name</span>
          </label>
          <input type="text" placeholder="Tourist Spot Name" className="input input-bordered" {...register('tourists_spot_name')} required />
        </div>
        </div>
        <div className='flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" placeholder="Location" className="input input-bordered" {...register('location')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Average Cost</span>
          </label>
          <input type="number" placeholder="Average Cost" className="input input-bordered" {...register('average_cost')} required />
        </div>
        </div>
        <div className='flex gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seasonality</span>
          </label>
          <input type="text" placeholder="Seasonality" className="input input-bordered" {...register('seasonality')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Travel Time</span>
          </label>
          <input type="text" placeholder="Travel Time" className="input input-bordered" {...register('travel_time')} required />
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Total Visitors Per Year</span>
          </label>
          <input type="number" placeholder="Total Visitors Per Year" className="input input-bordered" {...register('total_visitors_per_year')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" placeholder="Image URL" className="input input-bordered" {...register('image')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea placeholder="Short Description" className="textarea textarea-bordered" {...register('short_description')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="email" placeholder="User Email" className="input input-bordered" {...register('user_email')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="User Name" className="input input-bordered" {...register('user_name')} required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
        </div>
    );
};

export default AddTouristsSpot;