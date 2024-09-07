import { useState } from "react"
import { Link } from "react-router-dom"
export default function SignupPage()
{
  const [data, setdata]= useState({username:'',email:'',password:''})
  const [error, seterror]= useState('')

  const handlesubmit= async function (e)
  {
    e.preventDefault()
    try{
  if(!data.username || !data.email || !data.password)
  {
    seterror('Please fill all the fields **')
    setTimeout(() => {
      seterror('')
    }, 3000);
    setdata({username:'',email:'',password:''})
    throw new Error('fill the password')
  }
      const query= await fetch('http://localhost:3000/user/creation',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(data),
      })
      const respone= await query.json()
      console.log(respone)
    }
    catch(err){
      console.error(err)
    }

  }
     

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
            <form onSubmit={handlesubmit}>

<div className='text-left my-2 '>Username</div>
<div className="  w-4/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
      <input
        type="text"
        placeholder="username"
        value={data.username}
        onChange={(e)=>setdata((prev)=> ({ ...prev, username:e.target.value}))}
        className="bg-transparent placeholder:text-[#424242] w-full px-3 py-2 outline-none text-gray-300" />
    </div>

<div className='text-left my-2'>Email</div>
<div className=" w-4/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
      <input
        type="text"
        placeholder="xyz@example.com"
        value={data.email}
        onChange={(e)=>setdata((prev)=> ({ ...prev, email:e.target.value}))}
        className="bg-transparent placeholder:text-[#424242] w-full px-3 py-2 outline-none text-gray-300" />
    </div>

<div className='text-left my-2'>Password</div>
<div className=" w-4/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
      <input
        type="text"
        placeholder=". . . . . . . . . . . . . . . . . . ."
        value={data.password}
        onChange={(e)=>setdata((prev)=> ({ ...prev, password:e.target.value}))}
        className="bg-transparent placeholder:text-2xl w-full  placeholder:text-[#424242] px-3 py-2 outline-none text-gray-300" />
    </div>
 
 {error &&  <div className="text-red-500">
  <span>{error}</span>
 </div>
  }

  <div className="flex   w-4/5  h-20  items-center justify-center ">
    <div className="w-4/5  bg-[#3b3b3b] hover:text-white text-black h-10 text-xl content-center rounded-lg  "> 
    <button type="submit" >Create Account</button>
    </div>
  </div>
        </form>
  <div className=" text-center text-[#6c6b6b] w-4/5">
        Already have account ?   
        <Link to="/login" className=" text-blue-700">
        <span className="m-2 hover:text-blue-600 text-white">Sign in</span>
          </Link>
      
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