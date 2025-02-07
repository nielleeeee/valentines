import { MapPin, Calendar } from "@/components/UI/svg";

export const SecondStepForm = () => {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl text-accent font-bold">
        Will you be my valentines?
      </h1>

      <div className="flex flex-row gap-2 items-center justify-center">
        <Calendar width="30px" height="30px" />
        <p>Febuary 14, 2025</p>
      </div>

      <div className="flex flex-row gap-2 items-center justify-center">
        <MapPin width="30px" height="30px" />
        <p>Romantic Rooftop Restaurant</p>
      </div>
    </section>
  );
};
