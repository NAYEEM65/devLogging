import { Button, Table } from "antd";
import React, { FC, ReactElement } from "react";
import Moment from "react-moment";
const { Column, ColumnGroup } = Table;
interface IExperience {
  experience: Array<any>;
}
const Experience = ({ experience }: IExperience) => {
  return (
    <div>
      <h2 className="my-2">Experience</h2>
      <Table dataSource={experience} pagination={false}>
        <Column
          title="Company"
          dataIndex="company"
          key="company"
          responsive={["md"]}
        />
        <Column
          title="Title"
          dataIndex="title"
          key="title"
          responsive={["md"]}
        />
        <Column
          title="From"
          dataIndex="from"
          key="from"
          responsive={["md"]}
          render={(from) => <Moment format="YYYY/MM/DD">{from}</Moment>}
        />
        <Column
          title="To"
          dataIndex="to"
          key="to"
          responsive={["md"]}
          render={(to) => (
            <span
              className={`${
                to === null
                  ? "bg-green-500 text-white rounded p-1 font-medium"
                  : ""
              }`}
            >
              {to === null ? "Now" : <Moment format="YYYY/MM/DD">{to}</Moment>}
            </span>
          )}
        />
        <Column
          title="Action"
          dataIndex="location"
          key="action"
          responsive={["md"]}
          render={(_: any) => <Button danger>Delete</Button>}
        />
      </Table>
    </div>
  );
};

export default Experience;
