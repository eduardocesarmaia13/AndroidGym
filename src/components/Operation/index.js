import React, { useState } from "react";
import { View } from "react-native";
import { styleLayout } from "./styles/layout";
import { Button } from "../shared/forms/Button";
import { Select } from "../shared/forms/Select";
import { useOperation } from "./hooks/useOperation";
import { FormChecked } from "../shared/forms/FormChecked";
import { useCollpaseTimes } from "./hooks/useCollpaseTimes";
import { When } from "../shared/utils/When";

export default function Operation({ navigation }) {
  const {
    hasMonday,
    setHasMonday,
    hasTuesday,
    setHasTuesday,
    setHasWednesday,
    hasWednesday,
    hasThursday,
    setHasThursday,
    hasFriday,
    setHasFriday,
    hasSaturday,
    setHasSaturday,
    hasSunday,
    setHasSunday,
    hasDefault,
    setHasDefault,
  } = useCollpaseTimes();
  const { timeToClockSelect, setForm, form } = useOperation();
  const [timesOfClock, setTimesOfClock] = useState(timeToClockSelect());

  return (
    <View>
      <View style={styleLayout.form}>
        {/* Input Container */}
        <View style={styleLayout.content}>
          <FormChecked
            label="Segunda"
            setValue={setHasMonday}
            value={hasMonday}
          />
          <When isValid={hasMonday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Terça"
            setValue={setHasTuesday}
            value={hasTuesday}
          />
          <When isValid={hasTuesday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Quarta"
            setValue={setHasWednesday}
            value={hasWednesday}
          />
          <When isValid={hasWednesday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Quinta"
            setValue={setHasThursday}
            value={hasThursday}
          />
          <When isValid={hasThursday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Sexta"
            setValue={setHasFriday}
            value={hasFriday}
          />
          <When isValid={hasFriday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Sabado"
            setValue={setHasSaturday}
            value={hasSaturday}
          />
          <When isValid={hasSaturday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Domingo"
            setValue={setHasSunday}
            value={hasSunday}
          />
          <When isValid={hasSunday}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        <View style={styleLayout.content}>
          <FormChecked
            label="Padrão"
            setValue={setHasDefault}
            value={hasDefault}
          />
          <When isValid={hasDefault}>
            <View style={styleLayout.groupTime}>
              <Select
                style={styleLayout.selectGroup}
                select={{
                  style: styleLayout.select,
                }}
                label={"Início"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
              <Select
                select={{
                  style: styleLayout.select,
                }}
                style={styleLayout.selectGroup}
                label={"Fim"}
                options={timesOfClock}
                setValue={(text) => setForm({ ...form, sexo: text })}
              />
            </View>
          </When>
        </View>
        {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
        <View style={styleLayout.formSubmit}>
          <Button text={"Cadastrar"} style={styleLayout.btnSubmit} />
        </View>
      </View>
    </View>
  );
}
