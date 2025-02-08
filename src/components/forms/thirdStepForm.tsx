import Image from "next/image";
import { UseFormRegister } from "react-hook-form";

export const ThirdStepForm = ({
  register,
}: {
  register: UseFormRegister<MainFormProps>;
}) => {
  const foodOptions = [
    {
      value: "chinese",
      label: "Chinese",
      imagePath: "/food-option/chinese.webp",
    },
    {
      value: "filipino",
      label: "Filipino",
      imagePath: "/food-option/filipino.webp",
    },
    {
      value: "american",
      label: "American",
      imagePath: "/food-option/american.webp",
    },
  ];

  return (
    <section className="space-y-4">
      <h1 className="text-3xl text-accent font-bold">
        What food would you like to eat?
      </h1>

      <div className="w-full flex flex-col gap-2 p-2">
        {foodOptions.map((option) => {
          return (
            <div key={option.value}>
              <input
                className="peer sr-only"
                defaultValue={option.value}
                id={option.value}
                type="radio"
                {...register("food")}
              />

              <label
                className="flex h-16 w-full gap-4 cursor-pointer flex-row items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-50 p-1 transition-transform duration-150 hover:border-pink-400 active:scale-95 peer-checked:border-pink-500 peer-checked:shadow-md peer-checked:shadow-pink-400 text-sm uppercase text-gray-500 peer-checked:text-pink-500"
                htmlFor={option.value}
              >
                <Image
                  src={option.imagePath}
                  alt={option.label}
                  width={100}
                  height={100}
                  className="rounded-md h-10 w-auto aspect-video"
                />

                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
};
