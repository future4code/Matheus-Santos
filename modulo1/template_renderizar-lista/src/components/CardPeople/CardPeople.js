import React from "react";
import styled, { CardPeopleContainer } from "../CardPeople/style";

export const CardPeople = ({
  name,
  height,
  mass,
  hair,
  eye,
  birth,
  gender,
}) => {
  return (
    <CardPeopleContainer>
      <li> {name} </li>
      <li> {height} </li>
      <li> {mass} </li>
      <li> {hair} </li>
      <li> {eye} </li>
      <li> {birth} </li>
      <li> {gender} </li>
    </CardPeopleContainer>
  );
};
