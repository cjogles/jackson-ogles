import { parseISO, format } from "date-fns";

type Props = {
  dateString: string | undefined;
};

const DateFormatter = ({ dateString }: Props) => {
  let date;
  if (dateString?.length !== 0) {
    date = parseISO(dateString || "");
  } else {
    return <time dateTime={dateString || ""}>{format(date || "", "LLLL	d, yyyy")}</time>;
  }
  // const date = parseISO(dateString);
};

export default DateFormatter;
