"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface DateTimePickerProps {
  date?: Date;
  onSelect?: (date: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
}

export function DateTimePicker({
  date,
  onSelect,
  disabled,
  placeholder = "Pick date and time",
  className,
  minDate,
  maxDate,
}: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    date
  );
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  // Handle date selection
  const handleDateSelect = (selected: Date | undefined) => {
    if (selected) {
      // Preserve time from existing selection or set to current time
      const newDate = new Date(selected);
      if (selectedDate) {
        newDate.setHours(selectedDate.getHours());
        newDate.setMinutes(selectedDate.getMinutes());
      }
      setSelectedDate(newDate);
      onSelect?.(newDate);
    }
  };

  // Handle time selection
  const handleTimeChange = (type: "hours" | "minutes", value: string) => {
    if (!selectedDate) return;

    const newDate = new Date(selectedDate);
    if (type === "hours") {
      newDate.setHours(parseInt(value));
    } else {
      newDate.setMinutes(parseInt(value));
    }
    setSelectedDate(newDate);
    onSelect?.(newDate);
  };

  // Generate hours and minutes options
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? format(selectedDate, "PPp") : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="space-y-4 p-4">
          {/* Calendar */}
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={disabled}
            initialFocus
            minDate={minDate}
            maxDate={maxDate}
          />

          {/* Time Selection */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <Label>Time</Label>
            </div>
            <div className="flex gap-2">
              {/* Hours */}
              <Select
                value={
                  selectedDate?.getHours().toString().padStart(2, "0") || "00"
                }
                onValueChange={(value) => handleTimeChange("hours", value)}
                disabled={!selectedDate || disabled}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Hours" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <div className="h-[200px] overflow-auto">
                    {hours.map((hour) => (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>

              {/* Minutes */}
              <Select
                value={
                  selectedDate?.getMinutes().toString().padStart(2, "0") || "00"
                }
                onValueChange={(value) => handleTimeChange("minutes", value)}
                disabled={!selectedDate || disabled}
              >
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Minutes" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <div className="h-[200px] overflow-auto">
                    {minutes.map((minute) => (
                      <SelectItem key={minute} value={minute}>
                        {minute}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedDate(undefined);
                onSelect?.(undefined);
                setIsPopoverOpen(false);
              }}
            >
              Clear
            </Button>
            <Button
              size="sm"
              onClick={() => {
                setIsPopoverOpen(false);
              }}
            >
              Done
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
