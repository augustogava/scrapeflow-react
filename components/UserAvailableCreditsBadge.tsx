"use client";

import { GetAvailableCredits } from "@/actions/billing/getAvailableCredits";
import ReactCountUpWrapper from "@/components/ReactCountUpWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Query, useQuery } from "@tanstack/react-query";
import { CoinsIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

function UserAvailableCreditsBadge() {
  const query = useQuery({
    queryKey: ["user-available-credits"],
    queryFn: () => GetAvailableCredits(),
    refetchInterval: 30 * 1000, // 30 seconds
  });

  return (
    <Link
      href={"/billing"}
      className={cn(
        "w-full space-x-2 items-center",
        buttonVariants({ variant: "outline" })
      )}
    >
      <CoinsIcon size={20} className="text-primary" />
      <span className="font-semibold capitalize">
        {query.isLoading && <Loader2Icon className="w-4 h-4 animate-spin" />}
        {!query.isLoading && query.data && (
          <ReactCountUpWrapper value={query.data} />
        )}
        {!query.isLoading && query.data === undefined && "-"}
      </span>
    </Link>
  );
}

export default UserAvailableCreditsBadge;
