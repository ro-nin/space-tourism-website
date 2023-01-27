import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  redirect("/crew/Douglas-Hurley");
  return <div>page</div>;
};

export default page;
