import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" label="Имя" />
      <TextInput source="email" label="email" />
      {/* <TextInput source="role" label="Роль" /> */}
      <SelectInput
        source="role"
        label="Роль"
        choices={[
          { id: "trainer", name: "female" },
          { id: "user", name: "male" },
          { id: "admin", name: "any" },
        ]}
      />
      <TextInput source="phone" label="Телефон" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
