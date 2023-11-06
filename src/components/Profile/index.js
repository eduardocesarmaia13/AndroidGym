import React, { useState } from "react";
import { View } from "react-native";
import { styleLayout } from "./styles/layout";
import { FormGroup } from "../shared/forms/FormGroup";
import { Button } from "../shared/forms/Button";
import { Select } from "../shared/forms/Select";
import { convertDateBr } from "../../helpers/convertDateBr";

export default function Profile({ navigation, data = {} }) {
  const [form, setForm] = useState({
    name: data.name ?? "",
    birthdate: data.birthdate ?? "",
    gender: data.gender ?? "",
    cpf: data.cpf ?? "",
    cep: data.cep ?? "",
    email: data.email ?? "",
    mobile: data.mobile ?? "",
    height: data.height ??"",
    weight: data.weight ?? "",
    registration: data.registration ?? "",
    password: data.password ?? "",
  });

  return (
    <View>
      <View style={styleLayout.form}>
        {/* Input Container */}
        <View style={styleLayout.content}>
          <FormGroup
            label="Nome completo"
            setValue={(text) => setForm({ ...form, name: text })}
            value={form.name}
            placeholder="Digite o seu nome"
          />
          <Select
            label={"Selecione o sexo biológico"}
            value={form.gender}
            options={[
              { label: "Masculino", value: "MASCULINO" },
              { label: "Feminino", value: "FEMININO" },
            ]}
            setValue={(text) => setForm({ ...form, gender: text })}
          />
          <FormGroup
            label="Data de nascimento"
            setValue={(text) => setForm({ ...form, birthdate: text })}
            value={convertDateBr(form.birthdate)}
            placeholder="000.000.000-00"
          />
          <FormGroup
            label="CPF"
            setValue={(text) => setForm({ ...form, cpf: text })}
            value={form.cpf}
            placeholder="000.000.000-00"
          />
          <FormGroup
            label="Matricula"
            setValue={(text) => setForm({ ...form, registration: text })}
            value={form.registration}
            placeholder="00000-00"
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2%",
              marginBottom: "2%",
              width: "100%",
            }}
          >
            <FormGroup
              styleCustom={{
                margimTop: "20%",
                margimBottom: "20%",
                width: "45%",
              }}
              keyboardType='numeric'
              label="Peso"
              setValue={(text) => setForm({ ...form, weight: text })}
              value={form.weight}
              placeholder="00.00 kg"
            />
            <FormGroup
              styleCustom={{
                marginTop: "20%",
                marginBottom: "20%",
                width: "45%",
              }}
              keyboardType='numeric'
              label="Altura"
              setValue={(text) => setForm({ ...form, height: text })}
              value={form.height}
              placeholder="000 mts"
            />
          </View>
          <FormGroup
            label="CEP"
            value={form.cep}
            setValue={(text) => setForm({ ...form, cep: text })}
            placeholder="00000-000"
          />
          <FormGroup
            label="Celular"
            setValue={(text) => setForm({ ...form, mobile: text })}
            value={form.mobile}
            placeholder="(00) 0 0000-0000"
          />
          <FormGroup
            label="E-mail"
            setValue={(text) => setForm({ ...form, email: text })}
            value={form.email}
            placeholder="Digite seu melhor e-mail"
          />
          <FormGroup
            label="Senha"
            setValue={(text) => setForm({ ...form, password: text })}
            value={form.password}
            placeholder="Senha (Min 6 caracteres)"
          />
         {/* <Select
            label={"Pacote"}
            options={[
              { label: "Musculação - 100", value: "MUSCULAÇÃO" },
              { label: "Karatê - 120", value: "KARATÊ" },
              { label: "Judô - 100", value: "JUDÔ" },
              { label: "Capoeira - 100", value: "CAPOEIRA" },
            ]}
            setValue={(text) => setForm({ ...form, pacote: text })}
          /> */}
        </View>
        {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
        <View style={styleLayout.formSubmit}>
          <Button text={"Cadastrar"} style={styleLayout.btnSubmit} />
        </View>
      </View>
    </View>
  );
}
