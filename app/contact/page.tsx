import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";

export default function ContactPage() {
  return (
    <div className="flex w-full">
      <h1 className={title({ class: "w-5/12"})}>Let's build together.</h1>
      <div className="flex flex-col w-7/12">
        <Input size="lg" type="" label="Name" placeholder="Enter your name" className="mb-10" />
        <Input size="lg" type="email" label="Email" placeholder="Enter your email" description="I'll never share your email with anyone else." />
      </div>
    </div>
  );
}
