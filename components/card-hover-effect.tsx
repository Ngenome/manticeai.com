"use client";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { CalendarDaysIcon, ViewIcon } from "lucide-react";
import { Assistant } from "@/types";
export const AssistantsGrid = ({
  items,
  className,
}: {
  items: Assistant[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={"/assistants/" + item?.uid}
          key={item.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <AssistantCard assistant={item} />
        </Link>
      ))}
    </div>
  );
};

export const AssistantCard = ({
  className,
  assistant,
}: {
  className?: string;
  assistant: Assistant;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <Card key={assistant.id}>
        <CardHeader className="pb-0">
          <CardTitle>{assistant.name}</CardTitle>
          <CardDescription>{assistant.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center py-0">
          <img
            alt={assistant.name}
            className="rounded-t-xl object-cover"
            height="100"
            src={assistant.avatar}
            style={{
              aspectRatio: "200/100",
              objectFit: "cover",
            }}
            width="200"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center space-x-2">
            <CalendarDaysIcon className="w-4 h-4 opacity-70" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Created {assistant.created_at}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <ViewIcon className="w-4 h-4 opacity-70" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Published
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
// export const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
//       {children}
//     </h4>
//   );
// };
// export const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };
