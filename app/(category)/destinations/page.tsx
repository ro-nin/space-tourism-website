import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  redirect("/destinations/moon");
  return <></>;
};
export default page;
