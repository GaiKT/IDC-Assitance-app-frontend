import { useForm } from "react-hook-form"

function AddmembersForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 my-5 w-3/4 text-center">
      <label className="flex justify-between"> Firstname :
        <input {...register("firstName", { required: true, maxLength: 255 })} placeholder="Enter your firstname"  className="bg-gray-100 rounded w-3/5 p-2"/>
      </label>
      <label className="flex justify-between"> Lastname :
        <input {...register("lastName", { required: true, maxLength: 255})} placeholder="Enter your lastname" className="bg-gray-100 rounded w-3/5 p-2"/>
      </label>
      <label className="flex justify-between"> Card ID :
        <input {...register("cardid", { required: true, maxLength: 255})} placeholder="Enter your cardid" className="bg-gray-100 rounded w-3/5 p-2"/>
      </label>
      <label className="flex justify-between"> Team :
        <select {...register("team", { required: true })} className="bg-gray-100 rounded w-3/5 p-2">
          <option value="">Select...</option>
          <option value="1">Custumers</option>
          <option value="2">Inext</option>
          <option value="3">Partner</option>
          <option value="4">Vendor</option>
          <option value="5">Thaisarn</option>
        </select>
      </label>
      <label className="flex justify-between"> Company :
      <select {...register("company", { required: true })} className="bg-gray-100 rounded w-3/5 p-2">
          <option value="">Select...</option>
          <option value="1">TencentTH</option>
          <option value="2">HPE</option>
          <option value="3">Vertiv</option>
          <option value="4">Thaiwatsadu</option>
          <option value="5">Cloud</option>
        </select>
      </label>
      <label className="flex justify-between"> Address :
        <textarea {...register("address")} placeholder="123 dacrord .." className="bg-gray-100 rounded w-3/5 p-2" />
      </label>
      <div className="w-full flex gap-2 justify-end">
        <button type="submit" className="btn btn-success w-20 text-white">
          submit
        </button>
        <a href="/members" className="btn w-20 text-black">
          Cancel
        </a>
      </div>
    </form>
  )
}

export default AddmembersForm