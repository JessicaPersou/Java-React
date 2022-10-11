import { useEffect, useState } from "react";
import { Client } from "../models/client";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

export function FormClient() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Client>();

  const onSave: SubmitHandler<Client> = (data) => {
    try {
      console.log(data);
      // await axios.post(`http://localhost:8080/client`, client);
      navigate("/client");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSave)}
      className="container d-flex justify-content-between"
    >
      <div>
        <input
          type="text"
          className={`form-control m-1 ${errors.fullName ? "required" : ""}`}
          placeholder="Nome Completo"
          {...register("fullName", { required: true })}
        />
        {errors.fullName?.type === "required" && (
          <span className="message-error">Fullname is required</span>
        )}
      </div>
      <div>
        <input
          type="text"
          className={`form-control m-1 ${errors.cpf ? "required" : ""}`}
          placeholder="CPF"
          {...register("cpf", { required: true })}
        />
        {errors.cpf?.type === "required" && (
          <span className="message-error">CPF is required</span>
        )}
      </div>
      <div>
        <input
          type="date"
          className={`form-control m-1 ${errors.date ? "required" : ""}`}
          placeholder="Data Nascimento"
          {...register("date", { required: true })}
        />
        {errors.date?.type === "required" && (
          <span className="message-error">Birthdate is required</span>
        )}
      </div>
      <button type="submit" className="btn btn-success m-1 flex-1">
        Salvar
      </button>
    </form>
  );
}
