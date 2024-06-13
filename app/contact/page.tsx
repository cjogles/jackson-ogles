"use client"
import { title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInput {
  firstName: string;
  firstEmail: string;
  firstNote: string;
}

export default function ContactPage() {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit = async (data: any) => {
    const formData = new FormData(); // might want to send as application/json instead of multipart/form-data
    // Loop through the object
    for (let [key, val] of Object.entries(data)) {
      // append each item to the formData (converted to JSON strings)
      formData.append(key, JSON.stringify(val));
    }
  //   try {
  //     const response = await fetch('/api/contact', {
  //         method: 'post',
  //         body: formData,
  //     });
  //     if (!response.ok) {
  //         console.log("falling over")
  //         throw new Error(`response status: ${response.status}`);
  //     }
  //     const responseData = await response.json();
  //     console.log(responseData['message'])
  //     alert('Message successfully sent');
  // } catch (err) {
  //     console.error(err);
  //     alert("Error, please try resubmitting the form");
  // }
  };

  return (
    <div className="flex w-full flex-col md:flex-row">
      <h1 className={title({ class: "md:w-5/12"})}>Let's build together.</h1>
      <div className="flex flex-col mt-5 md:mt-0 md:w-7/12">
        <div className="mx-20 text-left">
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
          <Button color="primary" type="submit" className="mb-5">Submit</Button>
          {
            errors.firstName?.type === "required" && <p role="alert" className="text-red-500" >Name is required</p>
          }
          {
            errors.firstEmail?.type === "required" && <p role="alert" className="text-red-500">Email is required</p>
          }
          {
            errors.firstNote?.type === "required" && <p role="alert" className="text-red-500">Note is required</p>
          }
          {
            errors.firstEmail?.type === "pattern" && <p role="alert" className="text-red-500">Invalid email</p>
          }
        </form>
        </div>
      </div>
    </div>
  );
}
