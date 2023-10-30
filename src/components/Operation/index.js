import React, { useState } from "react";
import { View } from "react-native";
import { styleLayout } from "./styles/layout";
import { Button } from "../shared/forms/Button";
import { Select } from "../shared/forms/Select";
import { useOperation } from "./hooks/useOperation";
import { FormChecked } from "../shared/forms/FormChecked";

export default function Operation({ navigation }) {
  const { timeToClockSelect } = useOperation();
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

  return (
    <View>
      <View style={styleLayout.form}>
        {/* Input Container */}
        <View style={styleLayout.content}>
          <FormChecked label="Segunda" />
          <View style={styleLayout.groupTime}>
            <Select
              style={styleLayout.selectGroup}
              select={{
                style: styleLayout.select,
              }}
              label={"Início"}
              options={timeToClockSelect()}
              setValue={(text) => setForm({ ...form, sexo: text })}
            />
            <Select
              select={{
                style: styleLayout.select,
              }}
              style={styleLayout.selectGroup}
              label={"Fim"}
              options={timeToClockSelect()}
              setValue={(text) => setForm({ ...form, sexo: text })}
            />
          </View>
        </View>
        {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
        <View style={styleLayout.formSubmit}>
          <Button text={"Cadastrar"} style={styleLayout.btnSubmit} />
        </View>
      </View>
    </View>
  );
}
