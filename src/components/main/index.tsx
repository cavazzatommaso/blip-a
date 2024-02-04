import { Divider } from "@components/divider";
import { Form } from "@components/form";
import { Hero } from "@components/hero";
import { Section } from "@components/section";
import React from "react";
import { Footer } from "..";

export const Main: React.FC = () => {
  return (
    <div className="md:w-10/12 md:mx-auto max-w-7xl">
     <Hero />
     <Section />
     <Divider />
     <Form />
     <Divider />
     <Footer />
    </div>
  );
};
