import Link from "next/link";
import React from "react";

const layout = ({
  children,
  mathSlot,
  physicsSlot,
}: {
  children: React.ReactNode;
  mathSlot: React.ReactNode;
  physicsSlot: React.ReactNode;
}) => {
  return (
    <div className="w-10/12 m-auto">
      <nav className="flex gap-8 items-center my-6 border-b border-gray-500">
        <Link href="/courses/physics">Physics</Link>
        <Link href="/courses/math">Math</Link>
        <Link href="/courses/ict">ICT</Link>
      </nav>
      {children}

      <div className="flex gap-4 mt-2">
        {mathSlot}
        {physicsSlot}
      </div>
    </div>
  );
};

export default layout;
