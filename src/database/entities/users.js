import { EMAIL_VALID, ONLY_SPACES } from "../../constants/regex";

export function Users() {
  this.table = "users";
  this.attributes = {
    id: null,
    name: null,
    birthdate: null,
    cpf: null,
    gender: null,
    weight: null,
    height: null,
    email: null,
    mobile: null,
    password: null,
    recovery: null,
    cep: null,
    is_admin: null,
    created_at: null,
    updated_at: null,
  };

  this.getId = () => {
    return this.attributes.id;
  };

  this.setId = (id) => {
    if (typeof id != "bigint" || ONLY_SPACES.test(id))
      throw new Error("O id inserido não é um numero válido");

    this.attributes.id = id;
  };

  this.getName = () => {
    return this.attributes.name;
  };

  this.setName = (name) => {
    if (typeof name != "string" || ONLY_SPACES.test(name))
      throw new Error("O nome inserido não é uma string");

    this.attributes.name = name;
  };

  this.getBirthdate = () => {
    return this.attributes.birthdate;
  };

  this.setBirthdate = (birthdate) => {
    if (typeof birthdate != "string" || ONLY_SPACES.test(birthdate))
      throw new Error("O nome inserido não é uma string");

    this.attributes.birthdate = birthdate;
  };

  this.getBirthdate = () => {
    return this.attributes.birthdate;
  };

  this.setBirthdate = (birthdate) => {
    this.attributes.birthdate = birthdate;
  };

  this.getGender = () => {
    return this.attributes.gender;
  };

  this.setGender = (gender) => {
    if (!["MASCULINO", "FEMININO"].includes(gender))
      throw new Error(
        'O gênero inserido precisa ser "MASCULINO" ou "FEMININO"'
      );

    this.attributes.gender = gender;
  };

  this.getEmail = () => {
    return this.attributes.email;
  };

  this.setEmail = (email) => {
    if (typeof email != "string" || !EMAIL_VALID.test(email))
      throw new Error("O e-mail inserido não é válido");

    this.attributes.email = email;
  };

  this.getPassword = () => {
    return this.attributes.password;
  };

  this.setPassword = (password) => {
    if (typeof password != "string" || password.length < 5)
      throw new Error("O password inserido não é válido");

    this.attributes.password = password;
  };

  this.getCPF = () => {
    return this.attributes.cpf;
  };

  this.setCPF = (cpf) => {
    if (typeof cpf != "string" || cpf.length < 14)
      throw new Error("O CPF inserido não é válido");

    this.attributes.cpf = cpf;
  };

  this.getMobile = () => {
    return this.attributes.mobile;
  };

  this.setMobile = (mobile) => {
    if (typeof mobile != "string")
      throw new Error("O mobile inserido não é válido");

    this.attributes.mobile = mobile;
  };

  this.getIsAdmin = () => {
    return this.attributes.is_admin;
  };

  this.setIsAdmin = (is_admin) => {
    if (typeof is_admin != "boolean")
      throw new Error("O is_admin inserido não é válido");

    this.attributes.is_admin = is_admin;
  };

  this.getRecovery = () => {
    return this.attributes.recovery;
  };

  this.setRecovery = (recovery) => {
    if (typeof recovery != "string" || ONLY_SPACES.test(recovery))
      throw new Error("A palavra de recuração inserida não é válida");

    this.attributes.recovery = recovery;
  };

  this.getCreatedAt = () => {
    return this.attributes.created_at;
  };

  this.setCreatedAt = (createdAt) => {
    if (typeof createdAt != "string" || ONLY_SPACES.test(createdAt))
      throw new Error("A data inserida não é válida");

    this.attributes.created_at = createdAt;
  };

  this.getUpdatedAt = () => {
    return this.attributes.updated_at;
  };

  this.setUpdatedAt = (updateddAt) => {
    if (typeof updateddAt != "string" || ONLY_SPACES.test(updateddAt))
      throw new Error("A data inserida não é válida");

    this.attributes.updated_at = updateddAt;
  };
}
