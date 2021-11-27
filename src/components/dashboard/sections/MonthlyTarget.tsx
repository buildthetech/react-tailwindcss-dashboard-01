import { CircularProgressbar } from "react-circular-progressbar";
import { Button } from "../../buttons";

const SectionMonthlyTarget = () => {
  return (
    <div className="p-6 flex flex-col justify-between gap-8 h-full">
      <p className="text-lg font-bold">Monthly Target</p>
      <CircularProgressbar
        value={80}
        text={`${80}%`}
        className="h-48 text-primary-500"
        strokeWidth={4}
      />
      <Button type="primary" size="md" name="Learn More" />
    </div>
  );
};

export default SectionMonthlyTarget;
