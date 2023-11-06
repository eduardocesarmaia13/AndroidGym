import { ONLY_SPACES } from "../../../src/constants/regex";

export function Configs() {
  this.table = "configs";
  this.attributes = {
    id: null,
    label: null,
    value: null,
    reference: null,
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

  this.getLabel = () => {
    return this.attributes.label;
  };

  this.setLabel = (label) => {
    this.attributes.label = label;
  };

  this.getValue = () => {
    return this.attributes.value;
  };

  this.setValue = (value) => {
    this.attributes.value = value;
  };

  this.setReference = (reference) => {
    this.attributes.reference = reference;
  };

  this.getReference = () => {
    return this.attributes.reference;
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
