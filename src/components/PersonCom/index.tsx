"use client";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { addPerson } from "@/store/features/person/person-slice";

const PersonCom = () => {
  const persons = useAppSelector((state) => state.person.persons);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addPerson({ name: "Mohamed Almatry" }))}>
        Add Person
      </button>
      {persons.map((person) => (
        <div key={person.id}>Name: {person.name}</div>
      ))}
    </div>
  );
};

export default PersonCom;
