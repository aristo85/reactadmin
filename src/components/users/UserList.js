import * as React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';

 const UserList = props => (
  <List {...props} title="Пользователи" icon>
    <Datagrid rowClick="edit">
      <TextField source="id" label="id" />
      <TextField source="name" label="Имя" />
      <EmailField source="email" label="email" />
      <TextField source="role" label="Роль" />
      <TextField source="phone" label="Телефон" />
      <EditButton basePath="/users" label="Редактировать" />
    </Datagrid>
  </List>
);

export default UserList;