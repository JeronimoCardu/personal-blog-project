import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import { zodResolver } from "@hookform/resolvers/zod";
import { userForm, userSchema } from "@/schemas/user";

export default function Newsletter() {
  const [isEmail, setIsEmail] = useState("");
  const isValid = () => {
    setIsEmail("true");
  };
  const isInvalid = () => {
    setIsEmail("false");
  };
  const { register, handleSubmit } = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });

  return (
    <>
      <main>
        <h1 className="textPreset2 !mb-4 text-neutral-700 dark:text-white">
          Newsletter
        </h1>
        <p className="textPreset7 text-neutral-600 dark:text-neutral-400">
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It’s a simple way to
          keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I’ll send you updates whenever
          there’s something new to share.
        </p>
        <p className="textPreset5 !my-4 text-neutral-700 dark:text-white">
          I’d love to have you along for the ride and also hear about your own
          journey!
        </p>
        <form
          className="flex flex-col gap-1"
          onSubmit={handleSubmit(isValid, isInvalid)}
        >
          <label
            className="textPreset7 text-neutral-600 dark:text-white"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            {...register("email")}
            className={`textPreset7 text-neutral600 cursor-pointer rounded-[0.625em] !border-1 border-neutral-300 bg-white !px-2 !py-3 text-neutral-700 outline-0 hover:bg-neutral-200 dark:border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-700 ${isEmail == "true" ? "!border-1 !border-green-700" : isEmail == "false" ? "!border-1 !border-red-600" : ""}`}
            id="email"
            placeholder="email@example.com"
          />
          <button
            className="textPreset6 !my-4 w-fit cursor-pointer rounded-[0.625em] hover:!bg-blue-700 !bg-blue-500 !px-6 !py-4 text-neutral-900 focus:border-2"
            type="submit"
          >
            Stay update
          </button>
          {isEmail == "true" ? (
            <div className="flex items-center gap-2">
              <CiCircleCheck className="text-green-700 dark:text-green-500" />
              <p className="textPreset8 text-green-700 dark:text-green-500">
                You’re subscribed! Check your inbox for updates.
              </p>
            </div>
          ) : isEmail == "false" ? (
            <div className="flex items-center gap-2">
              <CiCircleAlert className="text-red-600 dark:text-red-400" />{" "}
              <p className="textPreset8 text-red-600 dark:text-red-400">
                Please enter a valid email address.
              </p>
            </div>
          ) : (
            ""
          )}
        </form>
        <p className="textPreset8 !my-4 text-neutral-600 dark:text-neutral-400">
          Unsubscribe anytime. No spam, I promise 🙂
        </p>
      </main>
      <hr />
      <Footer />
    </>
  );
}
