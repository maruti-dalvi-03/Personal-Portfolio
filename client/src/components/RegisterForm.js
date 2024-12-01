import React from 'react'

function RegisterForm() {
  return (
    <>
    <form>
        <h1>Register Your Self</h1>
        <input type="text" name='name' placeholder='Enter Your Name' />
        <input type='password' name='pass' placeholder='Enter Your Password' />
        <input type="submit" value="Register"/>
    </form>
      
    </>
  )
}

export default RegisterForm;
