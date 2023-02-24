import { Button, Table } from "antd";
import Moment from "react-moment";
import { connect } from "react-redux";

import { deleteExperience } from "../../actions/profile";
const { Column } = Table;
interface IExperience {
  experience: Array<any>;
  deleteExperience: Function;
}
const Experience = ({ experience, deleteExperience }: IExperience) => {
  return (
    <div>
      <h2 className="my-2">Experience</h2>
      <Table
        dataSource={experience}
        pagination={false}
        className="overflow-x-auto"
      >
        <Column
          title="Company"
          dataIndex="company"
          key="company"
          responsive={["xs", "sm", "md"]}
        />
        <Column
          title="Title"
          dataIndex="title"
          key="title"
          responsive={["xs", "sm", "md"]}
        />
        <Column
          title="From"
          dataIndex="from"
          key="from"
          responsive={["xs", "sm", "md"]}
          render={(from) => <Moment format="YYYY/MM/DD">{from}</Moment>}
        />
        <Column
          title="To"
          dataIndex="to"
          key="to"
          responsive={["xs", "sm", "md"]}
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
          dataIndex="_id"
          key="action"
          responsive={["xs", "sm", "md"]}
          render={(_id: any) => (
            <Button danger onClick={() => deleteExperience(_id)}>
              Delete
            </Button>
          )}
        />
      </Table>
    </div>
  );
};

export default connect(null, { deleteExperience })(Experience);
