import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";
import { IconButton } from "../../buttons";

const ComparingCard = ({
  title,
  amount,
  rate,
}: {
  title: string;
  amount: number;
  rate: number;
}) => (
  <div className="flex flex-col p-6 justify-center gap-2">
    <div className="flex flex-row justify-between items-center">
      <p className="pb-2 text-lg font-semibold">{title}</p>
      <IconButton
        Icon={ChevronRightIcon}
        size="md"
        type="secondary"
        title="See in details"
      />
    </div>
    <div className="flex flex-row gap-3 items-center flex-1 overflow-hidden">
      <p
        className="text-4xl font-bold truncate"
        title={amount.toLocaleString()}
      >
        {`$`}
        {amount.toLocaleString()}
      </p>
      <div
        className={`flex flex-row items-center justify-center text-lg font-semibold ${rate < 0 ? "text-red-500" : "text-green-500"
          }`}
        title={rate.toLocaleString()}
      >
        <p>{rate}</p>
        {rate < 0 ? (
          <ArrowDownIcon className="w-5 h-5" />
        ) : (
          <ArrowUpIcon className="w-5 h-5" />
        )}
      </div>
    </div>
    <p className="opacity-50">Compare to last year (2020)</p>
  </div>
);
export default ComparingCard;
