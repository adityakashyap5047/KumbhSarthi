import React from "react";
import { Button } from "@/components/ui/button";
import NumberTicker from "@/components/magicui/number-ticker";

function page() {
  return (
    <div>
      <p>Home Page</p>
      <Button>Click me</Button>
      <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-sky-600 dark:text-white ">
        <NumberTicker value={50} />
      </p>
    </div>
  );
}

export default page;
