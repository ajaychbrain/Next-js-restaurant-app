import supabase from "../app/config/supabaseClient";
import React from 'react'

export const About = () => {
    console.log(supabase, "Supabase");
  return (
    <div>About</div>
  )
}
