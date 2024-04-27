import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import { useState } from "react";

//UPDATE PROFILE FUNCIONALITY
const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = UseAuth();
  const [message, setMessage] = useState(null);
 
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.displayName,
      email: user.email, 
      photoURL: user.photoURL,
    },
  });


//
  const onSubmit = (data) => {
    updateUserProfile(data.name, data.photoURL)
      .then(() => {
        setMessage("Profile updated successfully!");
        setUser({...user, displayName: data.name, photoURL: data.photoURL });
        reset();
      });
  };

  return (
    <div className="lg:w-[60%] lg:mx-auto text-center font-display mt-20">
      <Helmet>
        <title>LuxeVillas | UpdateProfile</title>
      </Helmet>
      <div className="">
        <h1 className="mb-5 text-4xl font-medium text-[#1c1c1c]">UpdateProfile</h1>
        <p className="mb-5 text-slate-600 font-normal">
          Explore Our Exquisite Collection of Residential Estates: Where Dreams Meet Reality
        </p>
      </div>
      <div className="w-96 mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <img
            alt=""
            className="w-32 mx-auto h-32 rounded-full ring-2 ring-offset-4"
            src={user.photoURL}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 ml-1">Name is required.</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              value={user.email} 
              readOnly 
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photoURL", { required: true })}
            />
            {errors.photoURL && (
              <p className="text-red-500 ml-1">Photo URL is required</p>
            )}
          </div>
          {message && <p className="text-lg text-green-500">{message}</p>}
          <div className="form-control mt-6">
            <button type="submit" className="btn text-[#fff] bg-[#006aff]">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
