
export default function SignupPage()
{
  return (
    <>
    <div className="flex h-[100vh]  my-16">

      <div className="w-[50vw] flex ">
         <div>

            <div className=" text-left font-poppin m-4 ">
            <h1 className="text-4xl text-left font-poppin ">Create new account</h1>
            <span className="text-gray-400">
            Easily schedule with clients and recruits with a free PlanIt account.
            </span>
            </div>
<div className='text-left my-2 '>Username</div>
<div className="  w-4/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
      <input
        type="text"
        placeholder="username"
        className="bg-transparent placeholder:text-[#424242] px-3 py-2 outline-none text-gray-300" />
    </div>

<div className='text-left my-2'>Email</div>
<div className=" w-4/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
      <input
        type="text"
        placeholder="xyz@example.com"
        className="bg-transparent placeholder:text-[#424242]  px-3 py-2 outline-none text-gray-300" />
    </div>

<div className='text-left my-2'>Password</div>
<div className=" w-4/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
      <input
        type="text"
        placeholder=". . . . . . . . . . . . . . . . . . ."
        className="bg-transparent placeholder:text-2xl  placeholder:text-[#424242] px-3 py-2 outline-none text-gray-300" />
    </div>

  
  <div className="flex   w-4/5  h-20  items-center justify-center ">
    <div className="w-4/5  bg-[#3b3b3b] text-black h-10 text-xl content-center rounded-lg  "> Create Account</div>
  </div>
  <div className=" text-center text-[#6c6b6b] w-4/5">
        Already have account ?   
        <span className="m-2 text-white"><a href="">Sign in</a></span>
    </div>
    </div>


       </div>

       <div className=" w-[50vw]">
        <img src="https://app.cal.com/mock-event-type-list-dark.svg" alt="" />
       </div>
    </div>
    </>
  )
}