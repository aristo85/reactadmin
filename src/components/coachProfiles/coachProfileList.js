import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ArrayField,
  ChipField,
  SingleFieldList,
} from "react-admin";
import { StringToLabelObject } from "../StringToLabelObject";

const CoachProfileList = (props) => (
  <List {...props} title="Профили тренера" icon>
    <Datagrid rowClick="edit">
      <TextField source="id" label="id" />
      <ArrayField source="sportTypes" label="Вид спорта">
        <SingleFieldList>
          <StringToLabelObject>
            <ChipField source="label" />
          </StringToLabelObject>
        </SingleFieldList>
      </ArrayField>
      <TextField source="aboutme" label="обо мне" />
      <TextField source="education" label="Образование" />
      <TextField source="experience" label="Опыт" />
      <TextField source="height" label="Рост" />
      <TextField source="weight" label="Вес" />
      <TextField source="age" label="Возрасть" />
      <ArrayField source="aim" label="Цель">
        <SingleFieldList>
          <StringToLabelObject>
            <ChipField source="label" />
          </StringToLabelObject>
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="place" label="Место">
        <SingleFieldList>
          <StringToLabelObject>
            <ChipField source="label" />
          </StringToLabelObject>
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="serviceTypes" label="Услуги">
        <SingleFieldList>
          <StringToLabelObject>
            <ChipField source="label" />
          </StringToLabelObject>
        </SingleFieldList>
      </ArrayField>
      <TextField source="coachGender" label="Пол тренера" />
      <ArrayField source="submitList" label="Подписки">
        <SingleFieldList>
          <StringToLabelObject>
            <ChipField source="label" />
          </StringToLabelObject>
        </SingleFieldList>
      </ArrayField>
      <EditButton basePath="/coach-profiles" label="Редактировать" />
    </Datagrid>
  </List>
);

export default CoachProfileList;
