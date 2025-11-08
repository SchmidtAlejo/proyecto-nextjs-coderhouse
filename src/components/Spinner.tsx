"use client";

import { ThreeDots } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#25CEF0"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
