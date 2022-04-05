import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DangerousIcon from "@mui/icons-material/Dangerous";

const LigneEvents = (props) => {
  const { item } = props;
  return (
    <>
      <tr>
        <td>{item.date}</td>
        <td>{item.title}</td>
        <td>{item.content}</td>
        <td>
          <a>
            <EditIcon sx={{ fontSize: 25 }} />
          </a>{" "}
          <a>
            <DangerousIcon sx={{ fontSize: 25 }} color="success" />
          </a>
        </td>
      </tr>
    </>
  );
};

export default LigneEvents;
