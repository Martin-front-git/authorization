import { Button, Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from './calendar.module.scss';
import { ChevronDownIcon } from "@chakra-ui/icons";


export const DatePicker = ({ selectedDate, setSelectedDate }:any) => {
  return (
    <Popover >
        <PopoverTrigger>
          <Button rightIcon={<ChevronDownIcon />}>Select data</Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
          className={style.calendar}
            onChange={(value) =>
              value
                ? value instanceof Date
                  ? setSelectedDate(value)
                  : setSelectedDate(value[0])
                : null
            }
            value={selectedDate}
          />
        </PopoverContent>
      </Popover>
  );
};
