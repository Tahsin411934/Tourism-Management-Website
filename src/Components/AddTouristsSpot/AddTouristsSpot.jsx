import  { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hook/useAuth'; // Assuming UseAuth hook provides user information
import { Helmet } from 'react-helmet';

const AddTouristsSpot = () => {
  const { user } = UseAuth(); // Assuming UseAuth hook provides user information

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
   
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
    fetch('http://localhost:5000/touristSpot', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
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
    <>
    <Helmet>
          <title>ShareTrip | AddTouristsSpot</title>
        </Helmet>
    <div className="pt-5 mb-5">
    <div className='w-[50%] shadow-2xl mx-auto p-10 '>
    
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className=" text-center text-2xl font-bold italic mb-10">
        Add Your Tourist Spots 
        <h1 className="text-xs text-[#424242] font-normal mt-1">Add your dreams to <span className=" font-bold text-[#006aff]">Share</span> <span className="font-bold">Trip!</span>  </h1>
      </h1>



        {/* Form inputs */}
        <div className='flex gap-5'>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select className="input input-bordered" {...register('country_name', { required: 'Country Name is required' })} required>
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
            </select>
            {errors.country_name && (
              <p className="text-red-500 ml-1">{errors.country_name.message}</p>
            )}
          </div>



          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <input type="text" placeholder="Tourist Spot Name" className="input input-bordered" {...register('tourists_spot_name', { required: 'Tourist Spot Name is required' })} required />
            {errors.tourists_spot_name && (
              <p className="text-red-500 ml-1">{errors.tourists_spot_name.message}</p>
            )}
          </div>
          </div>
       
        <div className='flex gap-5'>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" placeholder="Location" className="input input-bordered" {...register('location', { required: 'Location is required' })} required />
            {errors.location && (
              <p className="text-red-500 ml-1">{errors.location.message}</p>
            )}
          </div>


          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input type="number" placeholder="Average Cost" className="input input-bordered" {...register('average_cost', { required: 'Average Cost is required' })} required />
            {errors.average_cost && (
              <p className="text-red-500 ml-1">{errors.average_cost.message}</p>
            )}
          </div>
        </div>


        <div className='flex gap-5'>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input type="text" placeholder="Seasonality" className="input input-bordered" {...register('seasonality', { required: 'Seasonality is required' })} required />
            {errors.seasonality && (
              <p className="text-red-500 ml-1">{errors.seasonality.message}</p>
            )}
          </div>


          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input type="text" placeholder="Travel Time" className="input input-bordered" {...register('travel_time', { required: 'Travel Time is required' })} required />
            {errors.travel_time && (
              <p className="text-red-500 ml-1">{errors.travel_time.message}</p>
            )}
          </div>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Total Visitors Per Year</span>
          </label>
          <input type="number" placeholder="Total Visitors Per Year" className="input input-bordered" {...register('total_visitors_per_year', { required: 'Total Visitors Per Year is required' })} required />
          {errors.total_visitors_per_year && (
            <p className="text-red-500 ml-1">{errors.total_visitors_per_year.message}</p>
          )}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" placeholder="Image URL" className="input input-bordered" {...register('image', { required: 'Image URL is required' })} required />
          {errors.image && (
            <p className="text-red-500 ml-1">{errors.image.message}</p>
          )}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea placeholder="Short Description" className="textarea textarea-bordered" {...register('short_description', { required: 'Short Description is required' })} required />
          {errors.short_description && (
            <p className="text-red-500 ml-1">{errors.short_description.message}</p>
          )}
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input disabled type="email" placeholder="User Email" className="input input-bordered" {...register('email')} required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input disabled type="text" placeholder="User Name" className="input input-bordered" {...register('name')} required />
        </div>

       <div className='w-20 mx-auto mt-5'>
       <button
       type='submit'
        className="hidden  font-semibold no-underline lg:inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#006aff] rounded-md shadow-sm"
      >
        Add
      </button>
       </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddTouristsSpot;
