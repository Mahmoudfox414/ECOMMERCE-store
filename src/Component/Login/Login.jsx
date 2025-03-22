
export default function Login() {
  return<>
  <div className="w-75 mx-auto">
  <form>

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

<div className="d-flex justify-content-center">
<button type="submit" className=" btn btn-outline-info mb-3 mt-3">Login</button>
</div>
  </form>

  </div>
  </>
}
