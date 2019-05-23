import { sleep } from "./lib/sleep/index";
import * as React from "react";
import { render } from "react-dom";
import { GeneralLayout } from "./ui/layouts/GeneralLayout";

const target = document.getElementById("root");
render(<GeneralLayout>Hax!</GeneralLayout>, target);
