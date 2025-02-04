
import { useForm } from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Form() {

    const form = useRef();

    const sendEmail = () => {
    
        emailjs.sendForm('service_6i4lath', 'template_qx5341s', form.current, '1PLQ76PGu0HoE0goW')
        .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm({defaultValues:{firstName:"", lastName:"", city:"Ankara"}});
    const onSubmit =  (data) => {
        if (data.firstName && data.lastName && data.TextArea && data.city && data.email) {
            
            toast.success("Form gönderildi", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            }); 
            sendEmail();
        }
    
        console.log(data);
        reset();
        
    }; 

  console.log(watch("example")); // watch input value by passing the name of it

console.log(errors)
const firstName=watch("firstName")

return (
<div className='border border-solid rounded-md flex flex-col items-center px-2 md:px-5 md:w-1/2 md:h-full bg-gradient-to-r from-blue-500 to-green-500 ... text-white'>
    <p className='py-2'>Selam {firstName}</p>

        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 py-3 text-black">
            <input type="text" name="name" {...register("firstName", {required:"*İsimsiz olmaz"})} placeholder="İsim Giriniz" className='border-solid border-2 border-blue-600 md:p-2 rounded-md'/>
                <p className='text-red-600'>{errors.firstName?.message}</p>
            <input type="text" name="surname" {...register("lastName", {required:"*Soyismini unutma", minLength:{value:5,message:"Minimum 5 karakter olmalı"}})} placeholder="Soyisim Giriniz" className='border-solid border-2 border-blue-600 md:p-2 rounded-md'/>
                <p className='text-red-600'>{errors.lastName?.message}</p>
            
            <input placeholder="email adresiniz..."type="email" name="email"{...register("email")} className="border-solid border-2 border-blue-600 md:p-2 rounded-md" />
            <textarea name="comment" {...register("TextArea", {max:400, minLength:{value:10,message:"**Minimum 10 karakter girmelisin"}, maxLength:{value:500, message:"**500 karakteri geçmemelisin"}})} placeholder='İstek, görüş ve önerileriniz için lütfen bu alanı doldurunuz.' className='border-solid border-2 border-blue-600 w-auto h-64 md:p-2 rounded-md'></textarea>
                <p className='text-red-600'>{errors.TextArea?.message}</p>
                
            <label className='text-white '>
                Hangi Sehirdesiniz?
                <br/>
            <select {...register("city", {required:true})} className="border-solid border-2 border-blue-600 text-black w-full h-full md:p-2 rounded-md">
                <option value="Ankara">Ankara</option>
                <option value="İstanbul">İstanbul</option>
                <option value="İzmir">İzmir</option>
                <option value="Other">Other</option>
            </select>
            </label>
            <div className='flex flex-row py-1 gap-3 mx-2 '>
            <button type="submit" className='border-2 border-solid p-2 hover:bg-gradient-to-r from-blue-500'>Gönder</button>
            <button type="reset" value="Reset" className='border-2 border-solid p-2 hover:bg-gradient-to-l from-green-500'>Formu Temizle</button>
            </div>
            <ToastContainer/>
        </form>

</div>
);
}