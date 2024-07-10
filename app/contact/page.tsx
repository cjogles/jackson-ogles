"use client"
import { title } from "../_components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm, Controller } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation'  // Usage: App router

interface IFormInput {
  firstName: string;
  firstEmail: string;
  firstNote: string;
}

export default function ContactPage() {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      firstEmail: "",
      firstNote: ""
    }
  });

  const onSubmit = async (data: any) => {
    const templateParams = {
      from_name: data.firstName,
      from_email: data.firstEmail,
      message: data.firstNote
    }
    
    emailjs
      .send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string, templateParams, {
        publicKey: "tiiixhf4OR9pwUtaJ"
      })
      .then(() => {
        console.log("email sent successfully");
        window.alert("Thanks for reaching out! I'll respond within the next 3 business days.")
        router.push('/')
      })
      .catch((error) => {
        console.error("error:", error);
      })
  };

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="flex flex-col">
        <h1 className={title({ class: ""})}>Let's build together.</h1>
        <h2 className="text-sky-800 text-lg my-8"><a href="/resume.pdf" download="jackson_ogles_resume">Download my resume 📝</a></h2>
      </div>
      <div className="flex flex-col mt-12 md:mt-0 md:w-7/12">
        <div className="md:mx-20 text-left">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            rules={{
              required: true
             }}
            render={({ field }) => <Input 
                {...field}
                color="primary" 
                size="lg" 
                placeholder="name" 
                className="mb-4" 
                description="Nicknames are encouraged! :)" 
              />
            }
            name="firstName"
            control={control}
            defaultValue=""
          />
          <Controller
            rules={{
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            render={({ field }) => <Input 
                {...field}
                color="primary"
                size="lg"
                placeholder="email"
                className="mb-4" 
                description="I'll never share your email with anyone else."
              />
            }
            name="firstEmail"
            control={control}
            defaultValue=""
          />
          <Controller
            rules={{
              required: true
            }}
            render={({ field }) => (   
                <Textarea 
                  {...field}
                  color="primary"
                  size="lg"
                  placeholder="note"
                  description="What would you like to say?"
                  className="mb-4" 
                />
            )}
            name="firstNote"
            control={control}
            defaultValue=""
          />
          <div className="flex md:flex-col">
            <Button color="primary" type="submit" className="mb-5 max-w-6">Submit</Button>
            {/* error display mobile */}
            {
              (
                errors.firstName?.type === "required" || 
                errors.firstEmail?.type === "required" ||
                errors.firstNote?.type === "required" ||
                errors.firstEmail?.type === "pattern"
              ) && <div className="inline-block md:hidden">
                <p role="alert" className="text-red-500 text-sm inline-block ml-2" >All fields required</p>
                <p role="alert" className="text-red-500 text-sm  ml-2" >Check email format</p>
              </div>
            }
            {
              errors.firstName?.type === "required" && <p role="alert" className="text-red-500 hidden md:block" >Name is required</p>
            }
            {
              errors.firstEmail?.type === "required" && <p role="alert" className="text-red-500 hidden md:block">Email is required</p>
            }
            {
              errors.firstNote?.type === "required" && <p role="alert" className="text-red-500 hidden md:block">Note is required</p>
            }
            {
              errors.firstEmail?.type === "pattern" && <p role="alert" className="text-red-500 hidden md:block">Invalid email</p>
            }

          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
