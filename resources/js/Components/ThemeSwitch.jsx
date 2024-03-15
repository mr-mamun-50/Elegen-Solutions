import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useLocalStorage } from "usehooks-ts";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme === "dark");

  const handleThemeChange = (enabled) => {
    setTheme(enabled ? "dark" : "light");
    setEnabled(enabled);
  };

  return (
    <Switch checked={enabled} onChange={handleThemeChange} className={classNames(enabled ? "bg-indigo-500" : "bg-gray-300",
      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
    )}>
      <span className="sr-only">Use setting</span>

      <span className={classNames(enabled ? "translate-x-5" : "translate-x-0",
        "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      )}>

        <span className={classNames(enabled ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
          "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity")}
          aria-hidden="true">
          <MoonIcon className="w-3.5 h-3.5 text-gray-400" />
        </span>

        <span className={classNames(enabled ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
          "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity")}
          aria-hidden="true">
          <SunIcon className="w-3.5 h-3.5 text-gray-400" />
        </span>

      </span>
    </Switch>
  );
}

export default ThemeSwitch;
