"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "กรุณากรอกชื่อ-นามสกุล"),
  email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง"),
  phone: z.string().min(9, "กรุณากรอกเบอร์โทรติดต่อให้ถูกต้อง"),
  title: z.string().min(2, "กรุณากรอกเรื่องที่ต้องการติดต่อ"),
  message: z.string(),
});
const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      title: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-1/2 px-10 text-left max-sm:w-full shrink-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อ-นามสกุล</FormLabel>
                <FormControl>
                  <Input placeholder="ชื่อสำหรับติดต่อกลับ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row w-full gap-5 max-md:flex-col ">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>เบอร์โทรติดต่อ</FormLabel>
                  <FormControl>
                    <Input placeholder="เบอร์โทรสำหรับติดต่อกลับ" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>อีเมล</FormLabel>
                  <FormControl>
                    <Input placeholder="อีเมล์สำหรับติดต่อกลับ" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เรื่องทีต้องการติดต่อ :</FormLabel>
                <FormControl>
                  <Input placeholder="เรื่องทีต้องการติดต่อ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ข้อความ :</FormLabel>
                <FormControl>
                  <Textarea placeholder="รายละเอียด" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="text-white rounded-full bg-main hover:bg-mainLight"
            variant="destructive"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
