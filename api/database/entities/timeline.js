import { ONLY_SPACES } from "../../constants/regex";

export function Timeline() {
  this.table = "timeline";
  this.attributes = {
    id: null,
    weekday: null,
    time_opened: null,
    time_closed: null,
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

  this.getWeekday = () => {
    return this.attributes.weekday;
  };

  this.setWeekday = (weekday) => {
    this.attributes.weekday = weekday;
  };

  this.getTimeOpened = () => {
    return this.attributes.time_opened;
  };

  this.setTimeOpened = (time_opened) => {
    this.attributes.time_opened = time_opened;
  };

  this.setTimeClosed = (timeClosed) => {
    this.attributes.time_closed = timeClosed;
  };

  this.getTimeClosed = () => {
    return this.attributes.timeClosed;
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
