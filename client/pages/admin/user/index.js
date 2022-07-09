import BackEndLayout from "@/components/backend/BackEndLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { getAllUsersAction } from "@/store/actions/userAction";
import Loader from "@/components/loader/loader";

export const user = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsersAction(dispatch);
  }, []);
  const data = useSelector((state) => state.user.users);

  const [users, setUsers] = useState([]);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Created At",
      selector: (row) => row.createdAt,
    },
  ];

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <BackEndLayout>
      {users && users.length > 0 ? (
        <DataTable pagination columns={columns} data={users} selectableRows />
      ) : (
        <Loader />
      )}
    </BackEndLayout>
  );
};
export default user;
