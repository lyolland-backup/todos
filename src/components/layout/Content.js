import React from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../Tasks";

export const Content = () => (
  <section>
    <Tasks />
    <Sidebar />
  </section>
);
