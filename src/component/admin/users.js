import * as React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create, Filter } from "react-admin";

const UserFilter = (props) => (
    <Filter {...props}>
      <TextInput lable="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="username" />
      </ReferenceInput>
    </Filter>
  );

export const UserList = props =>(
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="fisrtname" />
            <TextField source="lastname" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField source="phone" />
            <TextField source="website" />            
        </Datagrid>
    </List>
);


export const UserEdit = (props) => (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput source="fisrtname" />
        <TextInput source="lastname" />
        <TextInput source="enrollmentno" />
        <TextInput source="phoneno" />
        <TextInput source="email" />
        <TextInput source="department" />
      </SimpleForm>
    </Edit>
  );
  
  export const UserCreate = (props) => (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput source="fisrtname" />
        <TextInput source="lastname" />
        <TextInput source="enrollmentno" />
        <TextInput source="phoneno" />
        <TextInput source="email" />
        <TextInput source="department" />
      </SimpleForm>
    </Create>
  );
