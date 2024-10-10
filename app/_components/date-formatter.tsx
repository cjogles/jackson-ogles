import { parseISO, format } from "date-fns";

type Props = {
  dateString: string | null;
};

const DateFormatter = ({ dateString }: Props) => {
  let date;
  if (dateString?.length !== 0) {
    date = parseISO(dateString || "");
  } else {
    date = ""
    return <><time dateTime={dateString || ""}>{format(date || "", "LLLL	d, yyyy")}</time></>;
  }
};

export default DateFormatter;
