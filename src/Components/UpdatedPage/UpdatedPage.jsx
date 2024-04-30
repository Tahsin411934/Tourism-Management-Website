import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const UpdatedPage = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        setValue,
        watch
      } = useForm()
    const updateSpot = useLoaderData()
    console.log(updateSpot._id)
    const onSubmit = (data) => {
        fetch(`http://localhost:5000/touristSpot/${updateSpot._id}`, {
          method: "PUT",
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
              text: 'Tourist spot Updated successfully',
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
          <h1 className=" text-center text-2xl font-bold italic mb-10">
       Update Tourist Spots 
        <h1 className="text-xs text-[#424242] font-normal mt-1">Update your Adeed <span className=" font-bold text-[#006aff]">Tourist</span> <span className="font-bold">Spot!</span>  </h1>
      </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
        {/* Form inputs */}
        <div className='flex gap-5'>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select className="input input-bordered" {...register('country_name')} required>
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
            </select>
          </div>

          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Tourist Spot Name</span>
            </label>
            <input type="text" placeholder="Tourist Spot Name" className="input input-bordered" {...register('tourists_spot_name')} required />
          </div>
        </div>
        <div className='flex gap-5'>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input type="text" placeholder="Location" className="input input-bordered" {...register('location')} required />
          </div>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input type="number" placeholder="Average Cost" className="input input-bordered" {...register('average_cost')} required />
          </div>
        </div>
        <div className='flex gap-5'>
          <div className="form-control w-[100%]">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input type="text" placeholder="Seasonality" className="input input-bordered" {...register('seasonality')} required />
          </div>
          <div className="form-control w-[100%]">
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
           
            
        <div className='w-20 mx-auto mt-5'>
       <button
       type='submit'
        className="hidden  font-semibold no-underline lg:inline-flex items-center justify-center px-4 py-2 text-base leading-6 text-white whitespace-no-wrap bg-[#006aff] rounded-md shadow-sm"
      >
       Update
      </button>
       </div>
          </form>
        </div>
      );
};

export default UpdatedPage;