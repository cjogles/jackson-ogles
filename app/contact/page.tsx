"use client"
import { title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm, Controller } from "react-hook-form";
import emailjs from '@emailjs/browser';

interface IFormInput {
  firstName: string;
  firstEmail: string;
  firstNote: string;
}

export default function ContactPage() {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
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
      .send(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, templateParams, {
        publicKey: "tiiixhf4OR9pwUtaJ"
      })
      .then(() => {
        console.log("email sent successfully");
        reset();
      })
      .catch((error) => {
        console.error("error:", error);
      })
  };

  return (
    <div className="flex w-full flex-col md:flex-row">
      <h1 className={title({ class: "md:w-5/12"})}>Let's build together.</h1>
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
