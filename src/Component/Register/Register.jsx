
export default function Register() {
  return <>
   <div className="w-75 mx-auto">
  <form>
    {/* Name */}
<div className="form-group">
  <label htmlFor="name" className="h3 mt-3 mb-2">Name</label>
  <input type="text" id="name" name="name" className="form-control mb-3"/>
</div>
{/* Email */}
<div className="form-group">
  <label htmlFor="Email" className="h3 mt-3 mb-2">Email</label>
  <input type="email" id="Email" name="Email" className="form-control mb-3"/>
</div>
{/* Password */}
<div className="form-group">
  <label htmlFor="Password" className="h3 mt-3 mb-2">Password</label>
  <input type="password" id="Password" name="Password" className="form-control mb-3"/>
</div>
{/* Age */}
<div className="form-group">
  <label htmlFor="Age" className="h3 mt-3 mb-2">Age</label>
  <input type="number" id="Age" name="Age" className="form-control mb-3"/>
</div>
{/* Phone */}
<div className="form-group">
  <label htmlFor="Phone" className="h3 mt-3 mb-2">Phone</label>
  <input type="tel" id="Phone" name="Phone" className="form-control mb-3"/>
</div>
<div className="d-flex justify-content-center">
<button type="submit" className=" btn btn-outline-info mb-3 mt-3">Register</button>
</div>
  </form>

  </div>
    </>
}
