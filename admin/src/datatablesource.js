export const userColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
           <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "role",
    headerName: "Role",
    width: 100,
  }
  
];
export const softwareColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  
  {
    field: "version",
    headerName: "Version",
    width: 140,
  },
  
  {
    field: "expireDate",
    headerName: "Expire Date",
    width: 130,
  },
  
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
];

//Labs
export const labColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  
  {
    field: "name",
    headerName: "Name",
    width: 170,
  },

  {
    field: "capacity",
    headerName: "Capacity",
    width: 100,
  },

  {
    field: "location",
    headerName: "Location",
    width: 100,
  },
  
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  }
  
];
export const devicesColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 120,
  },
  {
    field: "model",
    headerName: "Model",
    width: 120,
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },

  {
    field: "description",
    headerName: "Description",
    width: 200,
  }
  
];
export const reservationColumns = [
  { field: "resID", headerName: "ID", width: 70 },
  
  {
    field: "subject",
    headerName: "Subject",
    width: 170,
  },
  {
    field: "startDate",
    headerName: "Start date",
    width: 170,
  },
  {
    field: "endDate",
    headerName: "End date",
    width: 170,
  },
  {
    field: "nowStatus",
    headerName: "Status",
    width: 150,
  },

  
];

