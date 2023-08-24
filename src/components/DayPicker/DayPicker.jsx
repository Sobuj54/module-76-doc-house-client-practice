import { differenceInCalendarDays, format } from "date-fns";
import { useState } from "react";
import { DayPicker, Row } from "react-day-picker";
import "react-day-picker/dist/style.css";

// these functions are outside of the component ..they eliminate past dates
function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return document.createDocumentFragment();
  return createElement(Row, props);
}

const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  console.log(selectedDay);
  //output will be:   Sun Aug 20 2023 00:00:00 GMT+0600

  const footer = selectedDay ? (
    <p className="text-green-500 font-semibold mt-2">
      You selected{" "}
      <span className="text-rose-500">{format(selectedDay, "PPP")}</span>.
    </p>
  ) : (
    <p className="text-red-500 font-semibold mt-2">Please pick a day.</p>
  );

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-16">
        <div>
          <DayPicker
            className="bg-white p-4 rounded-md"
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            footer={footer}
            fromDate={new Date()}
            components={OnlyFutureRow}
            hidden={isPastDate}
            showOutsideDays
          />
        </div>
        <div>
          <img
            className="rounded-md max-w-lg"
            src="https://img.freepik.com/free-photo/empty-modern-teethcare-stomatology-hospital-office-with-nobody-it-equipped-with-dental-intruments-ready-orthodontist-healthcare-treatment-tooth-radiography-images-display_482257-9418.jpg?size=626&ext=jpg"
            alt="equipment"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
