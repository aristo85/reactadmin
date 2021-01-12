import * as React from "react";
import { List, Datagrid, TextField, EditButton, ArrayField, SingleFieldList, ChipField, ReferenceField } from "react-admin";
import { StringToLabelObject } from "../StringToLabelObject";

const UserappList = (props) => (
  <List {...props} title="Пользователи" icon>
    <Datagrid rowClick="edit">
    <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
      <TextField source="id" label="id" />
      <ArrayField source="sportTypes" label="Вид спорта">
        <SingleFieldList>
          <StringToLabelObject>
            <ChipField source="label" />
          </StringToLabelObject>
        </SingleFieldList>
      </ArrayField>
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
      <TextField source="equipments" label="Оборудование дома" />
      <TextField source="priceMax" label="Стоимость Макс." />
      <TextField source="priceMin" label="Стоимость Мин." />
      <TextField source="healthIssue" label="Мед. противопоказания" />
      <TextField source="coment" label="Коментарий" />
      <EditButton basePath="/userapps" label="Редактировать" />
    </Datagrid>
  </List>
);

export default UserappList;
