/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

import { DEFAULT_SIGN_IN_FORM, formSchema } from "./schema";

function SignInPage() {
  const form = useForm<yup.InferType<typeof formSchema>>({
    resolver: yupResolver(formSchema),
    defaultValues: DEFAULT_SIGN_IN_FORM,
  });

  const onSubmit = (values: yup.InferType<typeof formSchema>) => {
    console.log(`🆘 src/pages/sign-in/index.tsx`); // eslint-disable-line
    console.log(values); // eslint-disable-line
    console.log('%c => value ', 'background: #0095FF; color: #fff'); // eslint-disable-line
    console.log(new Date()); // eslint-disable-line
  };

  return (
    <section className="bg-neutral-300 p-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 rounded bg-white p-5"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <Input placeholder="Password" {...field} />
                <FormControl />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="Confirm Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}

export default SignInPage;
