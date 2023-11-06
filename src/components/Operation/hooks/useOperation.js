import React, { useState } from "react";

export function useOperation() {
  const [form, setForm] = useState({
    segunda: {
      abertura: "",
      termino: "",
    },
    terca: {
      abertura: "",
      termino: "",
    },
    quarta: {
      abertura: "",
      termino: "",
    },
    quinta: {
      abertura: "",
      termino: "",
    },
    sexta: {
      abertura: "",
      termino: "",
    },
    sabado: {
      abertura: "",
      termino: "",
    },
    domingo: {
      abertura: "",
      termino: "",
    },
    default: {
      abertura: "",
      termino: "",
    },
  });

  const timeToClockSelect = () => {
    return [
      ...Array.from(Array(24).keys()).map((num) => {
        return {
          label: String(num < 10 ? `0${num}:00` : `${num}:00`),
          value: String(num),
        };
      }),
      ...Array.from(Array(24).keys()).map((num) => {
        return {
          label: String(num < 10 ? `0${num}:30` : `${num}:30`),
          value: String(num),
        };
      }),
    ].sort((a, b) => {
      return a.label.replace(":", "") - b.label.replace(":", "");
    });
  };

  return {
    form,
    timeToClockSelect,
    setForm,
  };
}
