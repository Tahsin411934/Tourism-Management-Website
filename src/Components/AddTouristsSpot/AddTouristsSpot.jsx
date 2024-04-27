import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/useAuth'; // Assuming UseAuth hook provides user information

const AddTouristsSpot = () => {
  const { user } = UseAuth(); // Assuming UseAuth hook provides user information
  
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      name: user.displayName || '', // Set default value for name field based on user's display name
      email: user.email || '', // Set default value for email field based on user's email
      // Add other default values if needed
    },
  });

  // Watch changes in the user object and update the form fields accordingly
  useEffect(() => {
    setValue('name', user.displayName || '');
    setValue('email', user.email || '');
  }, [user, setValue]);

  const onSubmit = (data) => {
    fetch('http://localhost:5000/touristSpots', {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(responseData => {
      if (responseData.error) {
        // If there is an error, show SweetAlert2 error message
        Swal.fire({
          title: 'Error!',
          text: responseData.error,
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        // If successful, show success message
        Swal.fire({
          title: 'Success!',
          text: 'Tourist spot added successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      }
    })
    .catch(error => {
      // Catch any network or other errors
      console.error("Error adding tourist spot:", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to add tourist spot. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    });
  };

  return (
    <div className='w-[50%] shadow-2xl mx-auto p-10 '>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form inputs */}
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
          <input type="email" placeholder="User Email" className="input input-bordered" {...register('email')} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" placeholder="User Name" className="input input-bordered" {...register('name')} required />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
